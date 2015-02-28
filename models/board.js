var board=function(){


  var players=[];



  function addPlayer(player){
    players.push(player);
  }

  return {
    players: players,
    addPlayer: addPlayer
  }
}

module.exports = board;

