var assert = require("assert")
describe('Player', function(){
    it('should default player id and name', function(){
      var player=require("../models/player.js")();
      assert.equal(player.id,1);

    })
    
})


