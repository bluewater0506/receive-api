const express = require('express')
const cors = require('cors');

const { mainwallet, createwallet, sendBNB } = require('./controller')
const app = express()
app.use(express.json());
app.use(cors({
  origin: '*'
}));

const port = 8001

app.get('/', (req, res) => {
   res.send("good working");
});

app.post('/mainwallet', (req, res)=> mainwallet(req, res));
app.post('/kucoinwallet', (req, res)=> createwallet(req, res));
app.post('/sendBNB', (req, res)=> sendBNB(req, res));

app.listen(port, () => {
  console.log(`Server running in port:${port}`)
})