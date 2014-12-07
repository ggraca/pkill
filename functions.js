function lookAt(entity, point){
  var difx = point.x - entity.position.x;
  var dify = point.y - entity.position.y;

  //console.log("x " + difx);
  //console.log("y " + dify);
  entity.tex.rotation = Math.atan2(dify, difx);
  //console.log(entity.rotation);

}

function dist(a, b){
  return Math.sqrt(Math.pow((a.x - b.x), 2) + Math.pow((a.y - b.y), 2))
}

function front(entity){
    var rotation = Math.PI/2 - entity.tex.rotation;
    return {
      x: entity.position.x + entity.speed * Math.sin(rotation),
      y: entity.position.y + entity.speed * Math.cos(rotation)
    };
}

function drawShadows(){
  var percentage = Math.sqrt(player.hp);

  fog.clear();
  fog.beginFill(0x000000, 1);

  fog.drawShape(new PIXI.Rectangle(0, 0, player.position.x - (percentage * innerWidth)/2, innerHeight))
  fog.drawShape(new PIXI.Rectangle(0, 0, innerWidth, player.position.y - (percentage * innerHeight)/2))

  var x = player.position.x + (percentage * innerWidth)/2
  fog.drawShape(new PIXI.Rectangle(x, 0, innerWidth - x, innerHeight))

  var y = player.position.y + (percentage * innerHeight)/2
  fog.drawShape(new PIXI.Rectangle(0, y, innerWidth, innerHeight - y));
}
