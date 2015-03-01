function add_player(){
  $.ajax({
      type: "POST",
      url: "add_player",
      data: {id: 1},
  success: function(d){board().positionPlayers(d)}
  }
      );
}


function bindEvents() {
  var keysToDirections = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };

  $(document).keydown(function (event) {
    var key = event.which;
    var direction = keysToDirections[key];

    if (direction) {
      $(document).trigger('move',direction);
    }
    else if (key === 32) {
      add_player();
    }
  });

}



$( document ).ready(function(){
  $('body').append('<canvas id="floor">');
  document.getElementById('floor').width=window.innerWidth-100;
  document.getElementById('floor').height=400;
  socket=io(window.location.hostname+":8000");

  board().initialize();
  bindEvents();
})



















function player(){
  var id;
  var posArray=[];
  var previousPosArray=[];
  var grown=false;
  var speed=3;
  var allowedDirections=['up','down','left','right'];
  function init(a){
    id=a.id;
    posArray=a.posArray;
    previousPosArray=a.posArray;
    $(document).on('move',move);
  }

  function move(){
    direction = arguments[1];
    var nextPosition = posArray[0];
    switch (direction) {
      case 'left':
        if(allowedDirections.indexOf(direction)>-1){
        posArray.unshift({'x' : posArray[0].x-speed, 'y': posArray[0].y});
        allowedDirections=['up','left','down'];
        }
        else{
          allowedDirections.unshift('NA');
        }
        break;
      case 'up':
        if(allowedDirections.indexOf(direction)>-1){
        posArray.unshift({'x' : posArray[0].x, 'y': posArray[0].y-speed});
        allowedDirections.shift();
        allowedDirections=['right','left','up'];
 
        }
        else{
          allowedDirections.unshift('NA');
        }
        break;
      case 'right':
        if(allowedDirections.indexOf(direction)>-1){
        posArray.unshift({'x' : posArray[0].x+speed, 'y': posArray[0].y});
        allowedDirections=['right','up','down'];
        }
        else{
          allowedDirections.unshift('NA');
        }
        break;
      case 'down':
        if(allowedDirections.indexOf(direction)>-1){
        
        posArray.unshift({'x' : posArray[0].x , 'y': posArray[0].y+speed});
        allowedDirections=['right','left','down'];
        
        }
        else{
          
          allowedDirections.unshift('NA');
        }
        
        break;
      default:
        throw('Invalid direction');
    }

    clear_floor();
    paint_snake(posArray);
    if(!grown && allowedDirections[0]!='NA'){
      posArray.pop();
    }
    else{
      grown=false;
    }

    var all_info={id: id,posArray: posArray};
    socket.emit('update_snake',all_info);
    //check_collision(nextPosition);
    //paint_apple(apple);

  }

  function check_collision(snake_head){
    if(Math.abs(snake_head.x - apple.x) <=3){
      posArray[posArray.length]={'x': posArray[posArray.length-1].x+2,'y': posArray[posArray.length-1].y+2}
      grown=true;

      socket.emit('new_apple');
    }
  }




  return{
    init: init
  }
}




