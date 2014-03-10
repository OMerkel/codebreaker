
function I18n() {
  this.data = {
    'selectmenuentry' : {
      'de-de' : 'W&auml;hle Men&uuml;eintrag',
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
    'language' : {
      'de-de' : 'Sprache',
      'en-us' : 'Idiom' },
    'testing' : {
      'de-de' : 'Testen',
      'en-us' : 'Testing' },
    'environment' : {
      'de-de' : 'W&auml;hle eine Testumgebung',
      'en-us' : 'Choose a test environment' },
    'languageselection' : {
      'de-de' : 'Sprachauswahl',
      'en-us' : 'Language selection' },
  };
}

I18n.prototype.setLanguage = function(language) {
  this.language=language;
  for(var msgId in this.data)
    document.getElementById(msgId).innerHTML = this.data[msgId][language];
};

translator = new I18n();
translator.setLanguage('en-us');

$('#de-de').click(function() { translator.setLanguage('de-de'); });
$('#en-usuk').click(function() { translator.setLanguage('en-us'); });
