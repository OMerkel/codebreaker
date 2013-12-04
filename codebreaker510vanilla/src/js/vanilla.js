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
  secret = new Secret((new SecretGenerator(5, 10)).secret);
  renderLog();
}

function renderLog() {
  var outLog = [];
  for( var entry in log ) {
    var guess = log[log.length-1-entry];
    var result = secret.compare(guess);
    outLog[outLog.length] = guess.replace(/(.)/g,
      '<span style="display: inline-block; text-align: center; width: 10px;">$1<\/span>') +
      ' &gt; ' + result;
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
  var codePattern=new RegExp("^[a-j]{5}");
  return codePattern.test(guess);
}
