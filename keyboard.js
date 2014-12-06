chatKey =

key = {
  up: false,
  left: false,
  right: false
}

buffer = "";

addEventListener('keydown', function(event) {

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

addEventListener('keyup', function(event) {
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

    case 13: // Enter
      runCommand(buffer);
      buffer = "";
      break;

    case 8: // Backspace
      if(buffer.length > 0)
        buffer = buffer.substring(0, buffer.length - 1);
      break;
  }

  if((event.keyCode >= 65 && event.keyCode <= 90) || event.keyCode == 32)
    buffer += String.fromCharCode(event.keyCode).toLowerCase();

}, false);
