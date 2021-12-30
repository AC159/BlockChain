const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

const bc1 = {
    "chain": [
        {
            "index": 1,
            "timestamp": 1640811331638,
            "transactions": [ ],
            "nonce": 100,
            "hash": "0",
            "previousBlockHash": "0"
        },
        {
            "index": 2,
            "timestamp": 1640811378797,
            "transactions": [ ],
            "nonce": 18140,
            "hash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100",
            "previousBlockHash": "0"
        },
        {
            "index": 3,
            "timestamp": 1640811380997,
            "transactions": [
                {
                    "transactionId": "3a1a94ff99634bf98bfe79f46b9cc55f",
                    "amount": 12.5,
                    "sender": "00",
                    "recipient": "ddd39ddb76eb4924b1be30e5bbe47b83"
                }
            ],
            "nonce": 133369,
            "hash": "0000ba57ec7c7c5b85e00dcfc205d9743c8908b58065fbad8b7751b8ba2d4b87",
            "previousBlockHash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100"
        },
        {
            "index": 4,
            "timestamp": 1640811382622,
            "transactions": [
                {
                    "transactionId": "e9a35be6899b4cc4ab2c76a0b9e00e44",
                    "amount": 12.5,
                    "sender": "00",
                    "recipient": "ddd39ddb76eb4924b1be30e5bbe47b83"
                }
            ],
            "nonce": 35009,
            "hash": "00008f6eeacf6b2933513f6802aeac14b99256e902d674078be554db51e84042",
            "previousBlockHash": "0000ba57ec7c7c5b85e00dcfc205d9743c8908b58065fbad8b7751b8ba2d4b87"
        },
        {
            "index": 5,
            "timestamp": 1640811473607,
            "transactions": [
                {
                    "transactionId": "bbc7f78ff8484f79956670c062e1402b",
                    "amount": 12.5,
                    "sender": "00",
                    "recipient": "ddd39ddb76eb4924b1be30e5bbe47b83"
                },
                {
                    "transactionId": "dbddb8cebab54a98a761ca2ad0cb09f7",
                    "amount": 10,
                    "sender": "DKSJHTESIOHJ4QTJAOSIRGJ",
                    "recipient": "EORIGHJEO5IGJEOHJDFLKG"
                },
                {
                    "transactionId": "c2edbff929f74d80955ad1cf33bf36da",
                    "amount": 20,
                    "sender": "DKSJHTESIOHJ4QTJAOSIRGJ",
                    "recipient": "EORIGHJEO5IGJEOHJDFLKG"
                },
                {
                    "transactionId": "6d4528b5be6a4d6a836645e2370f2e2c",
                    "amount": 30,
                    "sender": "DKSJHTESIOHJ4QTJAOSIRGJ",
                    "recipient": "EORIGHJEO5IGJEOHJDFLKG"
                }
            ],
            "nonce": 140699,
            "hash": "0000014c1f1335d54b41687eec31605f92df877873973babf83ab6675160019e",
            "previousBlockHash": "00008f6eeacf6b2933513f6802aeac14b99256e902d674078be554db51e84042"
        },
        {
            "index": 6,
            "timestamp": 1640811515152,
            "transactions": [
                {
                    "transactionId": "d6dd7082518f4ed6ae690b92c2af0baa",
                    "amount": 12.5,
                    "sender": "00",
                    "recipient": "ddd39ddb76eb4924b1be30e5bbe47b83"
                },
                {
                    "transactionId": "f8f4a1cc10cd4aef8338bf6b9425d2bb",
                    "amount": 40,
                    "sender": "DKSJHTESIOHJ4QTJAOSIRGJ",
                    "recipient": "EORIGHJEO5IGJEOHJDFLKG"
                },
                {
                    "transactionId": "8b58e369ffac4fe784656b2dd1755ab7",
                    "amount": 50,
                    "sender": "DKSJHTESIOHJ4QTJAOSIRGJ",
                    "recipient": "EORIGHJEO5IGJEOHJDFLKG"
                },
                {
                    "transactionId": "7002a147440a44088ee5bfa2bcfb9464",
                    "amount": 60,
                    "sender": "DKSJHTESIOHJ4QTJAOSIRGJ",
                    "recipient": "EORIGHJEO5IGJEOHJDFLKG"
                },
                {
                    "transactionId": "904241b0d56740d7b584f9ed6d3624b9",
                    "amount": 70,
                    "sender": "DKSJHTESIOHJ4QTJAOSIRGJ",
                    "recipient": "EORIGHJEO5IGJEOHJDFLKG"
                }
            ],
            "nonce": 64104,
            "hash": "0000d688900c93d8d0d5cabb5376f4b66465c6c816cca6c4e932b985c2eafa6a",
            "previousBlockHash": "0000014c1f1335d54b41687eec31605f92df877873973babf83ab6675160019e"
        },
        {
            "index": 7,
            "timestamp": 1640811533037,
            "transactions": [
                {
                    "transactionId": "90b5b50740db47008c00c5479a517685",
                    "amount": 12.5,
                    "sender": "00",
                    "recipient": "ddd39ddb76eb4924b1be30e5bbe47b83"
                }
            ],
            "nonce": 98906,
            "hash": "00000bacadb116e6173235cffafcaa1387850f89497f0ae6234edfbb15bc0899",
            "previousBlockHash": "0000d688900c93d8d0d5cabb5376f4b66465c6c816cca6c4e932b985c2eafa6a"
        },
        {
            "index": 8,
            "timestamp": 1640811535482,
            "transactions": [
                {
                    "transactionId": "ea4dd846e4f6433cb4150fa54fa88be3",
                    "amount": 12.5,
                    "sender": "00",
                    "recipient": "ddd39ddb76eb4924b1be30e5bbe47b83"
                }
            ],
            "nonce": 31875,
            "hash": "000044949218c99b634df79d794c50a2437de078e07273affd4502ec57d7729f",
            "previousBlockHash": "00000bacadb116e6173235cffafcaa1387850f89497f0ae6234edfbb15bc0899"
        }
    ],
    "pendingTransactions": [
        {
            "transactionId": "bf95bd1cd3a04258977ba173b1e1ae51",
            "amount": 12.5,
            "sender": "00",
            "recipient": "ddd39ddb76eb4924b1be30e5bbe47b83"
        }
    ],
    "currentNodeUrl": "http://localhost:3001",
    "networkNodes": [ ]
}

console.log('VALID:', bitcoin.chainIsValid(bc1.chain));
