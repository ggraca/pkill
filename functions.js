function lookAt(entity, point){
  var difx = point.x - entity.position.x;
  var dify = point.y - entity.position.y;

  //console.log("x " + difx);
  //console.log("y " + dify);
  entity.tex.rotation = Math.atan2(dify, difx);
  //console.log(entity.rotation);

}

function moveForward(entity){
    rotation = Math.PI/2 - entity.tex.rotation;
    entity.position.x += entity.speed * Math.sin(rotation);
    entity.position.y += entity.speed * Math.cos(rotation);
}
