function Player() {
  Entity.call(this, "img/player.png");

  this.terminal = new PIXI.Text("", style);
  this.addChild(this.terminal);

  this.terminal.position.y = -40;
  this.terminal.anchor = new PIXI.Point(0.5,0.5);

  this.speed = 0;
  this.hp = 0.5;
  this.dead = false;

  this.update = function(){

    this.terminal.setText(buffer);

    if(key.right)
      player.tex.rotation += 0.1;
    if(key.left)
      player.tex.rotation -= 0.1;


    if(this.speed > 0){

      var pos = front(this);

      if(pos.x - 25 < 0 || pos.x + 25 > innerWidth || pos.y - 25 < 0 || pos.y + 25 > innerHeight)
        return;

      for(var name in bitches){
        if(dist(pos, bitches[name].position) < 45)
          return
      }

      this.position.x = pos.x;
      this.position.y = pos.y;

    }
  }

  this.hit = function(){
    this.hp -= 0.05;
    if(this.hp <= 0){
      if(!this.dead){
        if(confirm("You killed " + counter + " of them! Restart?"))
          window.location.reload()
      }
      this.dead = true;
    }
  }
}

Player.prototype = Object.create(Entity.prototype);
