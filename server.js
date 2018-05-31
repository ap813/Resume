var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

var port = process.env.Port || 80;

var router = express.Router();

app.use(express.static('build'));

router.use(function(req, res, next) {
  console.log('Server firing up')
});

router.get('/', function(req, res) {
  res.redirect('/index.html');
})

app.listen(port);

console.log('Server listening on port ' + port);
