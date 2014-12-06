function runCommand(){
  if(bitches[buffer] != null){
    lookAt(player, bitches[buffer].position);
    bitches[buffer].die();
  }
  buffer = "";
}
