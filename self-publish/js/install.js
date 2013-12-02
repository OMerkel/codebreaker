//
// @author Oliver Merkel, <Merkel(dot)Oliver(at)web(dot)de>
//

var element46vanilla = document.getElementById('install46vanilla');
element46vanilla.onclick = install46vanilla;

var element510vanilla = document.getElementById('install510vanilla');
element510vanilla.onclick = install510vanilla;

function install46vanilla() {
  var manifestUrl='http://omerkel.github.io/codebreaker/codebreaker46vanilla/src/manifest_hosted.webapp';
  var request = window.navigator.mozApps.install(manifestUrl);
  request.onsuccess = function () {
    // Save the App object that is returned
    var appRecord = this.result;
    alert('Installation successful!');
  };
  request.onerror = function () {
    // Display the error information from the DOMError object
    alert('Install failed, error: ' + this.error.name);
  };
}

function install510vanilla() {
  var manifestUrl='http://omerkel.github.io/codebreaker/codebreaker510vanilla/src/manifest_hosted.webapp';
  var request = window.navigator.mozApps.install(manifestUrl);
  request.onsuccess = function () {
    // Save the App object that is returned
    var appRecord = this.result;
    alert('Installation successful!');
  };
  request.onerror = function () {
    // Display the error information from the DOMError object
    alert('Install failed, error: ' + this.error.name);
  };
}
