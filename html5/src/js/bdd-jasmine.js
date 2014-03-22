function windowResize() {
  $("#testframe").height(window.innerHeight - 44);
}

$(window).resize(windowResize);
$(document).ready(windowResize);
