function Enemy(spawn_pos, name) {
  Entity.call(this, "img/enemy.png");

  this.name = name;
  this.name_tex = new PIXI.Text(this.name, style);
  this.addChild(this.name_tex);

  this.name_tex.position.y = -40;
  this.name_tex.anchor = new PIXI.Point(0.5,0.5);

  this.speed = 1.5;
  this.position = spawn_pos;
  this.attacking = false;

  this.update = function(){
    lookAt(this, player.position);

    if(dist(this.position, player.position) < 45){
      if(this.attacking)
        return;

      this.attacking = true;
      var e = this;
      setTimeout(function(){
          if(dist(e.position, player.position) < 50)
            player.hit();
          e.attacking = false;
      }, 500);
    }
    else{
      var pos = front(this);

      if(pos.x < 0 || pos.x > innerWidth || pos.y < 0 || pos.y > innerHeight)
        return;

      for(var name in bitches){
        if(bitches[name] === this)
          continue;
        if(dist(pos, bitches[name].position) < 45)
          return
      }

      this.position.x = pos.x;
      this.position.y = pos.y;
    }
  }

  this.die = function(){
    player.hp += 0.01;
    stage.removeChild(this);
    delete bitches[this.name];
    counter++;
    console.log(counter);
  }
}

Enemy.prototype = Object.create(Entity.prototype);
