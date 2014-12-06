alias = {};

command = {
  alias: function(words){
    if(words.length == 0)
      return
    else if(words.length == 1){
      if(words[0] in alias)
        delete alias[words[0]]
    }
    else{
      alias[words[0]] = words.slice(1, words.length).join(" ");
    }
  },
  swipe: function(words){
    for (var name in bitches) {
      if(dist(bitches[name].position, player.position) < 55)
        bitches[name].die();
    }
  },
};



function runCommand(str){
  words = str.split(" ");

  if(words[0] in command)
    command[words[0]](words.slice(1, words.length));

  else if(words[0] in alias)
    runCommand(alias[words[0]] + words.slice(1, words.length).join(" "));

  else if(bitches[str] != null){
    lookAt(player, bitches[str].position);
    bitches[str].die();
  }
}
