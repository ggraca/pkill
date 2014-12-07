alias = {};

command = {
  a: function(words){
    if(words.length == 0)
      return;
    else if(words.length == 1){
      if(words[0] in alias)
        delete alias[words[0]];
    }
    else{
      var str = words.slice(1, words.length).join(" ");
      if(handleAlias(str).indexOf(words[0]) != -1)
        alias[words[0]] = str;
      else
        console.log("denied");
    }
  },
  s: function(words){
    for (var name in bitches) {
      if(dist(bitches[name].position, player.position) < 55)
        bitches[name].die();
    }
  },
  t: function(words){
    if(words.length == 0)
      return
    if(words[0] in bitches){
      player.position.x = bitches[words[0]].position.x;
      player.position.y = bitches[words[0]].position.y;
    }
  },
};


function handleAlias(str){
  var words = str.split(" ");
  var output = []

  for(var i = 0; i < words.length; i++){
    if(words[i] in alias)
      output = output.concat(handleAlias(alias[words[i]]));
    else
      output = output.concat([words[i]]);
  }

  return output;
}

function runCommand(str){
  console.log(str);
  words = handleAlias(str);

  for(var i = 0; i < words.length; i++){
    console.log(words[i]);
  }

  console.log(words[0]);

  if(words[0] in command)
    command[words[0]](words.slice(1, words.length));

  else if(words[0] in bitches){
    //lookAt(player, bitches[words[0]].position);
    bitches[words[0]].die();
  }
}
