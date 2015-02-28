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

  board().initialize();
  bindEvents();
})




