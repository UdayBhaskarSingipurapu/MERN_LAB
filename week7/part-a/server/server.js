const express = require('express');
const app = express();
const cors = require('cors');
let port = 8080;

app.use(cors());

app.get('/', (req, res) => {
    res.send("welcome");
})

app.get('/getMessage', (req, res) => {
    res.send('message is sent to react from express');
})

app.listen((port), () => {
    console.log(`server is running on port ${port}`);
})