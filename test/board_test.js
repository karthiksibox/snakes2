var assert = require("assert")
describe('Player Board', function(){
      var board= require("../models/board.js")();
    it('should return empty list when ther are no players', function(){
      assert.equal(board.players.length,0 );
    })


    it('should let me add a new player', function(){
      var player=require("../models/board.js")();
      board.addPlayer(player);
      assert.equal(board.players.length,1 );

    })
    
})

