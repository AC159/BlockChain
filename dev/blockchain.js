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

module.exports = Blockchain;
