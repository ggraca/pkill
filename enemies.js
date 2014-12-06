function Enemy(spawn_pos, name) {
  Entity.call(this, "img/enemy.png");

  this.name = name;
  this.name_tex = new PIXI.Text(this.name, style);
  this.addChild(this.name_tex);

  this.name_tex.position.y = -120;
  this.name_tex.anchor = new PIXI.Point(0.5,0.5);

  this.speed = 0.5;

  this.position = spawn_pos;

  this.target = player.position;
  //this.path = [];
  //function calc path
  this.move = function(){
    lookAt(this, this.target);
    this.name_tex.rotation = -this.rotation
    moveForward(this);
  }

  this.die = function(){
    stage.removeChild(this);
    delete bitches[this.name];
    counter++;
    console.log(counter);
  }
}

Enemy.prototype = Object.create(Entity.prototype);
