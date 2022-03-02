const express = require('express');
const path = require('path');
const app = express();
const port = 4000;
var bodyParser  = require('body-parser');

app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post('/login', (req, res) => {
  console.log(res.body);
})

app.listen(port, () => {console.log(`Listening on port ${port}`)});