function SecretGenerator(size, range) {
  this.secret = this.render(size, range);
}

SecretGenerator.prototype.render = function(size, range) {
  var secret = '';
  baseCharAscii = 'a'.charCodeAt(0);
  for(var i=0; i<size; ++i) {
    secret += String.fromCharCode(baseCharAscii+Math.floor(range*Math.random()));
  }
  return secret;
}
