function paint_snake(array){
  if(!array){return;}
  var floor=document.getElementById('floor');
  floor=floor.getContext('2d');
  floor.fillStyle = '#33a';
  array.forEach(function(cord,i){
    if(i==0){
      floor.fillStyle = '#e22c56';
    }
    floor.fillRect(cord.x,cord.y,10,10);
    if(i==0){
  floor.fillStyle = '#33a';

    }
    
  });
}

function clear_floor(){
  var floor=document.getElementById('floor');
    floor=floor.getContext('2d');
    floor.fillStyle = '#33a';
    floor.clearRect(0,0,700,700);
}



board=function(){

  function init(){
    $.ajax({
      type: "GET",
      url: '/board',
      success: positionPlayers 
    });
  }
   positionPlayers= function positionPlayers(data){
      data.players.forEach(function(p){ 
      paint_snake(p.posArray);
      player().init(p);
        
      });
    }
    
  return{
    initialize: init,
    positionPlayers: positionPlayers
  }
}
