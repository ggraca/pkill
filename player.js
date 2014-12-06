function Player() {
  Entity.call(this, "img/player.png");

  this.terminal = new PIXI.Text("", style);
  this.addChild(this.terminal);

  this.terminal.position.y = -120;
  this.terminal.anchor = new PIXI.Point(0.5,0.5);

  this.speed = 2;

  this.update = function(){

    this.terminal.setText(buffer);

    if(key.up)
      moveForward(player);
    if(key.right)
      player.tex.rotation += 0.1;
    if(key.left)
      player.tex.rotation -= 0.1;
  }

}

Player.prototype = Object.create(Entity.prototype);
