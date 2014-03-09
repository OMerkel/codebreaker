
var secret = new Secret((new SecretGenerator(4, 6)).secret);

var empty = '-';
var guess = noGuess = empty + empty + empty + empty;

function type(key) {
  guess = guess.replace(new RegExp(empty), key);
  render();
}

function render() {
  for(var digit=0; digit<guess.length; digit++) {
    $('#digit' + digit).html(empty == guess[digit] ? '&nbsp;': guess[digit]);
  }
  if( -1 == guess.indexOf(empty) ) {
    $('#code_keys').hide(1000);
    $('#check').show();
  }
  else {
    $('#code_keys').show(1000);
    $('#check').hide();
  }
  if( noGuess == guess ) {
    $('#current_guess').hide(1000);
  }
  else {
    $('#current_guess').show(1000);
  }
}

function renderLog() {
  var result = secret.compare(guess);
  var logEntry = '<li class="ui-li ui-li-static ui-btn-up-c ui-li-last">';
  logEntry += '<p class="ui-li-aside ui-li-desc">';
  logEntry += 'perfect <strong>' + result[0] + '</strong><br />';
  logEntry += 'imperfect <strong>' + result[1] + '</strong></p>';
  logEntry += '<h3 class="ui-li-heading">' + guess + '</h3>';
  logEntry += '</li>';
  $('#log').prepend(logEntry);
}

function check() {
  if( -1 == guess.indexOf(empty) ) {
    renderLog();
  }
}

$('#guess_digit_0').bind('click', function(){guess = guess.replace(/./, empty); render();});
$('#guess_digit_1').bind('click', function(){guess = guess.replace(/(.)./, '$1' + empty); render();});
$('#guess_digit_2').bind('click', function(){guess = guess.replace(/(..)./, '$1' + empty); render();});
$('#guess_digit_3').bind('click', function(){guess = guess.replace(/(...)./, '$1' + empty); render();});
$('#selected_a').bind('click', function(){type('a');});
$('#selected_b').bind('click', function(){type('b');});
$('#selected_c').bind('click', function(){type('c');});
$('#selected_d').bind('click', function(){type('d');});
$('#selected_e').bind('click', function(){type('e');});
$('#selected_f').bind('click', function(){type('f');});
$('#check').bind('click', function(){check();});
render();
