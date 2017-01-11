'use strict';
var stdin = process.stdin;
stdin.setRawMode(true);
stdin.resume();
stdin.on("keypress", function (chunk, key) {
  console.log(key);
});
