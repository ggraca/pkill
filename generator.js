function Generator(){
  this.cd = 4000;

  this.start = function(){
    this.wave(this);
  }

  this.wave = function(g){
    if(Object.keys(bitches).length < names.length){
      name = g.generateName()
      while(bitches[name] != null){
        name = g.generateName()
      }
      bitches[name] = new Enemy(g.generateSpawn(), name);
    }
    g.cd -= 100;
    if(g.cd < 0) g.cd = 0;
    setTimeout(function(){
        g.wave(g);
    }, g.cd);
  }

  this.generateSpawn = function(){
    return {x: 50 + (Math.floor(Math.random() * 2) * 500), y: Math.floor(Math.random() * 480)};
  }

  this.generateName = function(){
    return names[Math.floor(Math.random() * names.length)];
  }


}
