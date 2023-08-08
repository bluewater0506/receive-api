const express = require('express')
const cors = require('cors');

const { mainwallet, createwallet, sendBNB } = require('./controller')
const app = express()
app.use(express.json());
app.use(cors({
  origin: '*'
}));
require('dotenv').config()

const port = process.env.PORT

app.get('/', (req, res) => {
   res.send("good working");
});

app.post('/mainwallet', (req, res)=> mainwallet(req, res));
app.post('/createwallet', (req, res)=> createwallet(req, res));
app.post('/sendBNB', (req, res)=> sendBNB(req, res));

app.listen(port, () => {
  console.log(`Server running in port:${port}`)
})