const sha256 = require('sha256');
const { v4: uuidv4 } = require('uuid');
const currentNodeUrl = process.argv[3];

// Constructor function
function Blockchain() {
    this.chain = [];
    this.pendingTransactions = [];
    this.currentNodeUrl = currentNodeUrl;
    this.networkNodes = [];
    // Create Genesis block
    this.createNewBlock(100, '0', '0');
}

// Mine a new block
Blockchain.prototype.createNewBlock = function(nonce, previousBlockHash, hash) {
    // When a new block is created, we record the pendingTransactions in the blockchain
    const newBlock = {
        index: this.chain.length + 1,
        timestamp: Date.now(),
        transactions: this.pendingTransactions,
        nonce: nonce,
        hash: hash,
        previousBlockHash: previousBlockHash
    };

    // clear out the newTransactions property since our newBlock already contains the newTransactions
    this.pendingTransactions = [];
    this.chain.push(newBlock); // Add block to the blockchain

    return newBlock;
}

Blockchain.prototype.getLastBlock = function() {
    return this.chain[this.chain.length-1];
}

Blockchain.prototype.createNewTransaction = function(amount, sender, recipient) {
    return {
        transactionId: uuidv4().split('-').join(''),
        amount: amount,
        sender: sender,
        recipient: recipient
    };
}

Blockchain.prototype.addTransactionToPendingTransactions = function(transactionObj) {
    this.pendingTransactions.push(transactionObj);
    return this.getLastBlock()['index']+1;
}

// currentBlockData consists of index and transactions
Blockchain.prototype.hashBlock = function(previousBlockHash, currentBlockData, nonce) {
    const dataAsString = previousBlockHash + nonce.toString() + JSON.stringify(currentBlockData);
    return sha256(dataAsString);
}

Blockchain.prototype.proofOfWork = function(previousBlockHash, currentBlockData) {

    // repeatedly hash block until it finds the correct hash that starts with 0000 => '0000FPOAIRWETHJQ30948'
    // uses current block data for the hash, but also the previousBlockHash
    // => continuously changes nonce value (start with 0) until it finds the correct hash
    // return to us the nonce value that creates the correct hash

    let nonce = 0;
    let hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);
    while(hash.substring(0, 4) !== '0000') {
        nonce++;
        hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);
    }
    // console.log("Found hash:", hash);
    return nonce;
}

Blockchain.prototype.chainIsValid = function(blockchain) {

    let validChain = true;
    for(let i = 1; i < blockchain.length; i++) {
        const currentBlock = blockchain[i];
        const previousBlock = blockchain[i-1];
        const blockHash = this.hashBlock(previousBlock['hash'], {
            transactions: currentBlock['transactions'],
            index: currentBlock['index']
        }, currentBlock['nonce']);

        if (blockHash.substring(0, 4) !== '0000') validChain = false;
        if (currentBlock['previousBlockHash'] !== previousBlock['hash']) validChain = false;
    }

    const genesisBlock = blockchain[0];
    const correctNonce = genesisBlock['nonce'] === 100;
    const correctPreviousBlockHash = genesisBlock['previousBlockHash'] === '0';
    const correctHash = genesisBlock['hash'] === '0';
    const correctTransactions = genesisBlock['transactions'].length === 0;
    if (!correctNonce || !correctPreviousBlockHash || !correctHash || !correctTransactions) validChain = false;

    return validChain;
}

Blockchain.prototype.getBlock = function(blockHash) {
    let correctBlock = null;
    this.chain.forEach(block => {
       if (block.hash === blockHash) correctBlock = block;
    });
    return correctBlock;
}

Blockchain.prototype.getTransaction = function(transactionId) {
    let correctTransaction = null;
    let correctBlock = null;
    this.chain.forEach(block => {
        block.transactions.forEach(transaction => {
            if (transaction.transactionId === transactionId) {
                correctTransaction = transaction;
                correctBlock = block;
            }
        });
    });
    return { transaction: correctTransaction, block: correctBlock };
}

Blockchain.prototype.getAddressData = function(address) {
    // Get the total balance of a certain address in the blockchain

    const addressTransactions = [];
    this.chain.forEach(block => {
        block.transactions.forEach(transaction => {
           if (transaction.sender === address || transaction.recipient === address)
               addressTransactions.push(transaction);
        });
    });

    let balance = 0;
    addressTransactions.forEach(transaction => {
       if (transaction.recipient === address) balance += transaction.amount;
       else if (transaction.sender === address) balance -= transaction.amount;
    });
    return { addressTransactions, addressBalance: balance };
}

module.exports = Blockchain;
