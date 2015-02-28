var express = require('express');
var router = express.Router();
var board=require('../models/board.js')();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/board',function(req,res){
  res.send(board);
  
});

router.post('/add_player',function(req,res){
  var player=require('../models/player.js')();
  board.addPlayer(player);
  res.send(board);
});

module.exports = router;
