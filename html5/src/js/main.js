//
// Copyright (c) 2016 Oliver Merkel
// All rights reserved.
//
// @author Oliver Merkel, <Merkel(dot)Oliver(at)web(dot)de>
//

var secret, digits, values;

var EMPTY = '-',
    NOGUESS = EMPTY + EMPTY + EMPTY + EMPTY + EMPTY + EMPTY;

function type(key) {
  guess = guess.replace(new RegExp(EMPTY), key);
  render();
}

function render() {
  var lowRes = (window.innerWidth < 350) || (window.innerHeight< 350);
  for(var digit=0; digit<digits; digit++) {
    $('#guess_digit_' + digits + '_' + digit).html(EMPTY == guess[digit] ?
      '&nbsp;': guess[digit]);
  }
  if( -1 == guess.indexOf(EMPTY) ) {
    if(lowRes) {
      $('#code_keys_' + values).hide(1000);
    }
    $('#check').show();
  } else {
    $('#code_keys_' + values).show(1000);
    $('#check').hide();
  }
  if( NOGUESS.slice(0,digits) == guess ) {
    if(lowRes) {
      $('#guess_' + digits).hide(1000);
    }
  } else {
    $('#guess_' + digits).show(1000);
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

function removeDigit( e ) {
  var id = e.target.id;
  var position = parseInt(id[id.length-1]);
  guess[position] = EMPTY;
  guess = guess.slice(0, position) + EMPTY + guess.slice(position+1);
  render();
}

function newGame() {
  var fiveDigits = $('#radio-5digits').is(':checked');
  digits = fiveDigits ? 5 : 4;
  values = fiveDigits ? 10 : 6;
  if (fiveDigits) {
    $('#code_keys_6').hide();
    $('#guess_4').hide();
    $('#code_keys_10').show();
    $('#guess_5').show();
  } else {
    $('#code_keys_6').show();
    $('#guess_4').show();
    $('#code_keys_10').hide();
    $('#guess_5').hide();
  }
  secret = new Secret((new SecretGenerator(digits, values)).secret);
  guess = NOGUESS.slice(0,digits);
  $('#log').html('');
  render();
  $(window).resize();
}

function typeValue( e ) {
  var id = e.target.id.split('_');
  if('select' == id[0]) {
    type(id[2]);
  }
}

function setupHandlers() {
  for(var i=0; i<10; ++i) {
    var chr = 'abcdefghijklmnopqrstuvwxyz'.charAt(i);
    $('#select_10_' + chr).bind('click', typeValue);
  }
  for(var i=0; i<6; ++i) {
    var chr = 'abcdefghijklmnopqrstuvwxyz'.charAt(i);
    $('#select_6_' + chr).bind('click', typeValue);
  }
  for(var i=0; i<5; ++i) {
    $('#guess_digit_5_' + i).bind('click', removeDigit);
  }
  for(var i=0; i<4; ++i) {
    $('#guess_digit_4_' + i).bind('click', removeDigit);
  }
  $('#check4').bind('click', check);
  $('#check5').bind('click', check);
  $('#command-new').bind('click', newGame);
  $('#mainmenu').bind('click', popupMenu);
}

function popupMenu() {
  $('#main-menu').popup({
    transition: 'slideup',
    positionTo: '#mainmenu'
  }).popup('open');
};

function rescale() {
  var innerWidth = $(window).innerWidth();

  var buttonWidth = innerWidth * 0.05;
  buttonWidth = buttonWidth < 27 ? 27 : buttonWidth;
  $('.select_button').css('width', buttonWidth + 'px');
  $('.select_button_wide').css('width', (buttonWidth * 1.4) + 'px');
  $('.digit_button').css('width', (buttonWidth * 1.3) + 'px');
  $('.check_button').css('width', (buttonWidth * 2) + 'px');

  var backgroundSize = 0.9 * buttonWidth;
  var backgroundSizeString = backgroundSize + 'px ' + backgroundSize + 'px';
  $('.select_button').css('background-size', backgroundSizeString);
  $('.select_button_wide').css('background-size', backgroundSizeString);
  $('.digit_button').css('background-size', backgroundSizeString);
  $('.check_button').css('background-size', backgroundSizeString);

  var paddingTop = backgroundSize * 1.0;
  $('.select_button').css('padding', paddingTop + 'px 0px 0px 0px');
  $('.select_button_wide').css('padding', paddingTop + 'px 0px 0px 0px');
  $('.digit_button').css('padding', paddingTop + 'px 0px 0px 0px');
  $('.check_button').css('padding', (paddingTop * 1.1) + 'px 0px 0px 0px');

  var fontSize = backgroundSize * 0.6;
  $('.select_button').css('font-size', fontSize + 'px');
  $('.select_button_wide').css('font-size', fontSize + 'px');
  $('.digit_button').css('font-size', fontSize + 'px');
  $('.check_button').css('font-size', (fontSize * 0.6) + 'px');
}

function initialize() {
  $(window).resize(rescale);
  setupHandlers();
  newGame();
}

$( initialize );
