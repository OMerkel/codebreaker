//
// @author Oliver Merkel, <Merkel(dot)Oliver(at)web(dot)de>
//

var log = [];
var secret = '';
newGame();

var elementInput = document.getElementById('idguess');
elementInput.onchange = check;
var elementNew = document.getElementById('new');
elementNew.onclick = newGame;

function newGame() {
  log = [];
  secret = new Secret((new SecretGenerator(4, 6)).secret);
  renderLog();
}

function renderLog() {
  var outLog = [];
  for( var entry in log ) {
    var result = secret.compare(log[log.length-1-entry]);
    outLog[outLog.length] = log[log.length-1-entry] + ' &gt; ' + result;
  }
  var element = document.getElementById('log');
  element.innerHTML = outLog.join('<br />');
}

function check() {
  var guess = elementInput.value;
  if (isValid(guess)) {
    log[log.length] = guess;
    elementInput.value = '';
    renderLog();
  }
}

function isValid(guess) {
  var codePattern=new RegExp("^[a-f]{4}");
  return codePattern.test(guess);
}
