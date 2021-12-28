const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

const previousBlockHash = '9OIAWHTFGQ03948TGOFRII;GJQE9R';
const currentBlockData = [
    {
        amount: 10,
        sender: '29084TJRWEA',
        recipient: 'j0qw94tjqi;rioagj45r'
    },
    {
        amount: 30,
        sender: 'asghetjt7k68',
        recipient: 'j0qw94taeryhe5thjqi;rioagj45r'
    },
    {
        amount: 200,
        sender: 'ashet5jer6jr',
        recipient: 'goluigmgfkrioagj45r'
    }
];

const nonce = bitcoin.proofOfWork(previousBlockHash, currentBlockData);
console.log(nonce);
console.log(bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce));
