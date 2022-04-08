const express = require('express');
const cors = require('cors');
const { port } = require('./config');
const app = express();

// app.get('/' (req, res) => {})

console.log('noDEEMON');

app.listen(port, () => console.log('Heloo express is online', port));
