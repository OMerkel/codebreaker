
function I18n() {
  this.data = {
    'menu' : {
      'de-de' : 'Men&uuml;',
      'en-us' : 'Menu'},
    'selectmenuentry' : {
      'de-de' : 'Men&uuml;eintrag w&auml;hlen',
      'en-us' : 'Select menu entry'},
    'checking' : {
      'de-de' : 'Pr&uuml;fen',
      'en-us' : 'Check' },
    'new' : {
      'de-de' : 'Neu',
      'en-us' : 'New' },
    'license' : {
      'de-de' : 'Lizensierung',
      'en-us' : 'License' },
    'testing' : {
      'de-de' : 'Testen',
      'en-us' : 'Testing' },
    'environment' : {
      'de-de' : 'W&auml;hle eine Testumgebung',
      'en-us' : 'Choose a test environment' },
    'menu-options' : {
      'de-de' : 'Einstellungen',
      'en-us' : 'Settings' },
    'options' : {
      'de-de' : 'Einstellungen',
      'en-us' : 'Settings' },
    'about' : {
      'de-de' : '&Uuml;ber',
      'en-us' : 'About' },
    'languageselection' : {
      'de-de' : 'Sprachauswahl',
      'en-us' : 'Language selection' },
    'codesize' : {
      'de-de' : 'Gr&ouml;&szlig;e der Codes',
      'en-us' : 'Code size' },
    'digits4letters6' : {
      'de-de' : '4 Stellen mit 6 Werten',
      'en-us' : '4 digits w/ 6 letters' },
    'digits5letters10' : {
      'de-de' : '5 Stellen mit 10 Werten',
      'en-us' : '5 digits w/ 10 letters' },
  };
}

I18n.prototype.setLanguage = function(language) {
  this.language=language;
  for(var msgId in this.data)
    document.getElementById(msgId).innerHTML = this.data[msgId][language];
};

translator = new I18n();
translator.setLanguage('en-us');

$('#radio-de-de').click(function() { translator.setLanguage('de-de'); });
$('#radio-en-usuk').click(function() { translator.setLanguage('en-us'); });
