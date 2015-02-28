var player=function(){

  var posArray = [];
  var head=Math.floor((Math.random()*10)+3)+10;
  posArray.push({'x': head,'y': 3});
  posArray.push({'x': head-5,'y': 3});
  posArray.push({'x': head-14,'y': 3});
  posArray.push({'x': head-20,'y': 3});
  
  

  function init(id,name){
    this.id=id;
    this.name=name;
  }
  return {
    id: this.id || 1,
    name: this.name || "Karthik",
    posArray: posArray
  };
}

module.exports = player;

