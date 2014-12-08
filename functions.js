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

  borders = {
    top: player.position.y - (percentage * innerHeight)/2,
    down:player.position.y + (percentage * innerHeight)/2,
    left: player.position.x - (percentage * innerWidth)/2,
    right: player.position.x + (percentage * innerWidth)/2,
  };

  if(player.position.x < (percentage * innerWidth)/2)
    borders.right = (percentage * innerWidth)
  if(player.position.x > innerWidth - (percentage * innerWidth)/2)
    borders.left = innerWidth - (percentage * innerWidth)
  if(player.position.y < (percentage * innerHeight)/2)
    borders.down = (percentage * innerHeight)
  if(player.position.y > innerHeight - (percentage * innerHeight)/2)
    borders.top = innerHeight - (percentage * innerHeight)


  fog.drawShape(new PIXI.Rectangle(0, 0, borders.left, innerHeight));
  fog.drawShape(new PIXI.Rectangle(0, 0, innerWidth, borders.top));
  fog.drawShape(new PIXI.Rectangle(borders.right, 0, innerWidth - borders.right, innerHeight));
  fog.drawShape(new PIXI.Rectangle(0, borders.down, innerWidth, innerHeight - borders.down));
}
