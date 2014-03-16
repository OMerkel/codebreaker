
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
    'about_text' : {
      'de-de' :
        "<p><b>Code Breaker</b> ist eine Abwandlung " +
          "eines Spiels unbekannten Ursprungs namens " +
          "<i>Bulls and Cows</i> (<i>Bullen und " +
          "K&uuml;he</i>). Dessen Spieleprinzip " +
          "unterliegt der Gemeinfreiheit. " +
          "Es gibt auch ver&ouml;ffentlichte und " +
          "verf&uuml;gbare kommerzielle Versionen " +
          "von <i>Bulls and Cows</i> anderer " +
          "Hersteller unter verschiedenen " + 
          "Namen und Handelsmarken. <i>Code Breaker</i> " +
          "selbst ist MIT-lizensiert und benutzt das " +
          "gemeinfreie Spieleprinzip von <i>Bulls and " +
          "Cows</i>. Enthalten sind unver&auml;nderte " +
          "Software-Bibliotheken von Dritten, die unter " +
          "freien Software-Lizenzen stehen.</p>" +
        "<h3>Regeln</h3>" +
        "<p>The rules of <i>Code Breaker</i> are as follows.</p>" +
        "<ul>" +
          "<li>Iteratively a guess is stated to be " +
            "compared towards a secret four digit " +
            "code with six possible values per digit " +
            "(letters from <b>a</b> to <b>f</b>).</li>" +
          "<li>Objective is to match the secret " +
            "code perfectly.</li>" +
          "<li>On each guess a result indicates the " +
            "amount of perfect matches and imperfect " +
            "matches represented as numerical values." +
            "<ul>" +
              "<li>Perfect matches indicate that a " +
                "digit is included in the secret " +
                "and is placed at correct position " +
                "within the guess.</li>" +
              "<li>Imperfect matches indicate that " +
                "a digit is included in the secret " +
                "but the position is still " +
                "incorrect.</li>" +
            "</ul>" +
          "</li>" +
          "<li>Thus the secret code is found if " +
            "four perfect matches and no imperfect " +
            "match are indicated on a check.</li>" +
          "<li>Digit values may occur multiple " +
            "times. No digit of the guess will count " +
            "multiple times in the indicated result. " +
            "Indicating perfect matches over " +
            "imperfect ones is prioritized. Previous " +
            "check results are kept visible " +
            "in a log to use for analysis.</li>" +
        "</ul>",
      'en-us' :
        "<p><b>Code Breaker</b> is derived from a " +
          "game called <i>Bulls and Cows</i> of unknown " +
          "origin. It's game principle is public domain. " +
          "There are commercial versions of <i>Bulls and " +
          "Cows</i> from other parties using different " + 
          "names or trademarks being published and " +
          "being available as well. <i>Code Breaker</i> " +
          "is MIT licensed and just uses the public " +
          "domain principle of the game <i>Bulls and " +
          "Cows</i>. It comes bundled with unmodified " +
          "third party software libraries using free " +
          "software licensing.</p>" +
        "<h3>Rules</h3>" +
        "<p>The rules of <i>Code Breaker</i> are as follows.</p>" +
        "<ul>" +
          "<li>Iteratively a guess is stated to be " +
            "compared towards a secret four digit " +
            "code with six possible values per digit " +
            "(letters from <b>a</b> to <b>f</b>).</li>" +
          "<li>Objective is to match the secret " +
            "code perfectly.</li>" +
          "<li>On each guess a result indicates the " +
            "amount of perfect matches and imperfect " +
            "matches represented as numerical values." +
            "<ul>" +
              "<li>Perfect matches indicate that a " +
                "digit is included in the secret " +
                "and is placed at correct position " +
                "within the guess.</li>" +
              "<li>Imperfect matches indicate that " +
                "a digit is included in the secret " +
                "but the position is still " +
                "incorrect.</li>" +
            "</ul>" +
          "</li>" +
          "<li>Thus the secret code is found if " +
            "four perfect matches and no imperfect " +
            "match are indicated on a check.</li>" +
          "<li>Digit values may occur multiple " +
            "times. No digit of the guess will count " +
            "multiple times in the indicated result. " +
            "Indicating perfect matches over " +
            "imperfect ones is prioritized. Previous " +
            "check results are kept visible " +
            "in a log to use for analysis.</li>" +
        "</ul>" },
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
