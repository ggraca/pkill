var names = ["quinn", "will", "zed", "ray", "tom", "paul", "sarah", "dick", "felix", "ggraca", "jack", "vicky", "ben", "matt"];
var adjectives = ["fat", "ugly", "dead", "black", "huge", "quick", "quiet", "wild", "bloody", "dark", "talented", "cruel", "plastic", "gifted", "crazy", "ex-wife", "viral", "numb"];


function Generator(){
  this.cd = 4000;
  this.dif = 0;

  this.start = function(){
    //for(var i = 0; i < 10; i++)
    //  adjectives.push("");

    this.wave();
  }

  this.wave = function(){
    var n = this.dif/30 + 1;
    var name, pos;

    for(var i = 0; i < n; i++){
      while((name = this.generateName()) in bitches);
      while((pos = this.generateSpawn()) == null);
      bitches[name] = new Enemy(pos, name);
    }
    this.dif++;

    window.setTimeout(function(){
      generator.wave();
    }, generator.cd);
  }

  this.generateSpawn = function(){
    pos = {
      x: Math.floor((Math.random() * (innerWidth - 50)) + 25),
      y: Math.floor((Math.random() * (innerHeight - 50)) + 25),
    }

    if(dist(pos, player) < 150)
      return null;

    for(var name in bitches){
      if(dist(pos, bitches[name].position) < 50)
        return null;
    }
    return pos;
  }

  this.generateName = function(){
    if(this.dif > 6)
      return adjectives[Math.floor(Math.random() * adjectives.length)] + names[Math.floor(Math.random() * names.length)];
    else
      return names[Math.floor(Math.random() * names.length)];
  }


}
