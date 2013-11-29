//
// @author Oliver Merkel, <Merkel(dot)Oliver(at)web(dot)de>
//

function Secret(code) {
  this.code = code;
}

Secret.prototype.compare = function(guess) {
  exact = this.comparePositional(guess);
  any = this.compareAnyPosition(guess);
  return [ exact, any-exact ];
}

Secret.prototype.comparePositional = function(guess) {
  var match = 0;
  for(var i=0; i<this.code.length; ++i) {
    if (this.code.charAt(i) == guess.charAt(i)) {
      ++match;
    }
  }
  return match;
}

Secret.prototype.compareAnyPosition = function(guess) {
  code = this.code;
  match = 0;
  for(var i=0; i<guess.length; ++i) {
    position = code.indexOf(guess[i]);
    if (position > -1) {
      code = Secret.remove(code, position);
      ++match;
    }
  }
  return match;
}

Secret.remove = function(code, position) {
  return code.slice( 0, position ) + code.slice( position+1 );
}
