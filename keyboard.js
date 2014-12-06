chatKey =

key = {
  up: false,
  left: false,
  right: false
}

buffer = "";

window.addEventListener('keydown', function(event) {

  switch (event.keyCode) {
    case 37: // Left
      key.left = true;
      break;

    case 38: // Up
      key.up = true;
      break;

    case 39: // Right
      key.right = true;
      break;
    
  }
}, false);

window.addEventListener('keyup', function(event) {
  switch (event.keyCode) {
    case 37: // Left
      key.left = false;
      break;

    case 38: // Up
      key.up = false;
      break;

    case 39: // Right
      key.right = false;
      break;
  }
}, false);

window.addEventListener('keypress', function(event) {

  if(event.charCode == 0)
    runCommand();
  else
    buffer += String.fromCharCode(event.charCode);

}, false);
