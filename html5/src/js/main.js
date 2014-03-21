
var secret, digits, values;

var EMPTY = '-',
    NOGUESS = EMPTY + EMPTY + EMPTY + EMPTY + EMPTY + EMPTY;

function type(key) {
  guess = guess.replace(new RegExp(EMPTY), key);
  render();
}

function render() {
  var lowRes = (window.innerWidth < 350) || (window.innerHeight< 350);
  for(var digit=0; digit<guess.length; digit++) {
    $('#digit' + digit).html(EMPTY == guess[digit] ? '&nbsp;': guess[digit]);
  }
  if( -1 == guess.indexOf(EMPTY) ) {
    if(lowRes) {
      $('#code_keys').hide(1000);
    }
    $('#check').show();
  } else {
    $('#code_keys').show(1000);
    $('#check').hide();
  }
  if( NOGUESS.slice(0,digits) == guess ) {
    if(lowRes) {
      $('#current_guess').hide(1000);
    }
  } else {
    $('#current_guess').show(1000);
  }
}

function renderLog() {
  var result = secret.compare(guess);
  var logEntry = '<li class="ui-li ui-li-static ui-btn-up-c ui-li-last" ';
  logEntry += 'style="padding-top: 0; padding-bottom: 0;">';
  logEntry += '<p class="ui-li-aside ui-li-desc" style="top: 2px;">';
  logEntry += 'perfect <strong>' + result[0] + '</strong> / ';
  logEntry += 'imperfect <strong>' + result[1] + '</strong></p>';
  logEntry += '<h3 class="ui-li-heading" style="margin: 0;">';
  for(i=0; i<guess.length; ++i) {
    logEntry += "<span class='logdigit'>" + guess[i] + '</span>';
  };
  logEntry += '</h3></li>';
  $('#log').prepend(logEntry);
}

function check() {
  if( -1 == guess.indexOf(EMPTY) ) {
    renderLog();
  }
}

function typeValue( e ) {
  var id = e.target.id;
  type(id[id.length-1]);
}

function setupValues() {
  var group = $('#code_keys');
  group.controlgroup('container').html('');
  var ctrls = '';
  for(var i=0; i<values; ++i) {
    var chr = 'abcdefghijklmnopqrstuvwxyz'.charAt(i);
    ctrls += "<a href='#' data-role='button' data-icon='plus' " +
      "data-iconpos='top' class='mybutton' id='value_" + chr + "'>" +
      chr + "</a>";
  }
  group.controlgroup('container').append(ctrls);
  group.enhanceWithin().controlgroup('refresh');
  for(var i=0; i<values; ++i) {
    var chr = 'abcdefghijklmnopqrstuvwxyz'.charAt(i);
    $('#value_' + chr).bind('click', typeValue);
  }
}

function removeDigit( e ) {
  var id = e.target.id;
  var position = parseInt(id[id.length-1]);
  guess[position] = EMPTY;
  guess = guess.slice(0, position) + EMPTY + guess.slice(position+1);
  render();
}

function setupDigits() {
  var group = $('#current_guess');
  group.controlgroup('container').html('');
  var ctrls = '';
  for(var i=0; i<digits; ++i) {
    ctrls += "<a id='guess_digit_" + i + "' data-role='button' " +
      "data-icon='delete' data-iconpos='top' class='mybutton'>" +
      "<span id='digit" + i + "'>&nbsp;</span></a>";
  }
  group.controlgroup('container').append(ctrls);
  group.enhanceWithin().controlgroup('refresh');
  for(var i=0; i<digits; ++i) {
    $('#guess_digit_' + i).bind('click', removeDigit);
  }
}

function newGame() {
  if ( $('#radio-5digits').is(':checked') ) {
    digits = 5;
    values = 10;
  } else {
    digits = 4;
    values = 6;
  }
  secret = new Secret((new SecretGenerator(digits, values)).secret);
  guess = NOGUESS.slice(0,digits);
  $('#log').html('');
  setupValues();
  setupDigits();
  render();
}

function initialize() {
  $('#check').bind('click', check);
  $('#command-new').bind('click', newGame);
  newGame();
  render();
}

$( initialize );
