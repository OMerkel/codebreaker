
function I18n() {
  this.data = {
    'de-de' : {
      'menu' : 'Men&uuml;',
      'selectmenuentry' : 'Men&uuml;eintrag w&auml;hlen',
      'checking' : 'Pr&uuml;fen',
      'new' : 'Neu',
      'license' : 'Lizensierung',
      'testing' : 'Testen',
      'environment' : 'W&auml;hle eine Testumgebung',
      'menu-options' : 'Einstellungen',
      'options' : 'Einstellungen',
      'about' : '&Uuml;ber',
      'about-title' : '&Uuml;ber Code Breaker',
      'legal-title' : 'Rechtliches',
      'languageselection' : 'Sprachauswahl',
      'codesize' : 'Gr&ouml;&szlig;e der Codes',
      'digits4letters6' : '4 Stellen mit 6 Werten',
      'digits5letters10' : '5 Stellen mit 10 Werten',
      'about_text' :
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
        "<p>Dies sind die Regeln zu <i>Code Breaker</i> im Einzelnen.</p>" +
        "<ul>" +
          "<li>Wiederholte Rateversuche werden mit " +
            "einem geheimen Code fester Zahl von Stellen " +
            "und ausgesuchter Anzahl Werte pro Stelle " +
            "verglichen (wie unter dem Men&uuml; " +
            "<i>Einstellungen</i> ausgew&auml;hlt).</li>" +
          "<li>Ziel ist es, eine perfekte &Uuml;bereinstimmung " +
            "mit dem geheimen Code zu erreichen.</li>" +
          "<li>Bei jedem Rateversuch wird das Ergebnis als " +
            "Anzahl perfekter &Uuml;bereinstimmungen und unperfekten " +
            "&Uuml;bereinstimmungen als Zahlenwerte angezeigt." +
            "<ul>" +
              "<li>Perfekte &Uuml;bereinstimmungen zeigen, dass " +
                "eine Stelle mit ihrem Wert im geheimen Code vorkommt " +
                "und auch im Rateversuch korrekt positioniert ist.</li>" +
              "<li>Unperfekte &Uuml;bereinstimmungen zeigen, dass " +
                "eine Stelle mit ihrem Wert im geheimen Code vorkommt, " +
                "aber die Position im Rateversuch noch nicht stimmt.</li>" +
            "</ul>" +
          "</li>" +
          "<li>Damit gilt der geheime Code als gefunden, sobald " +
            "alle Stellen als perfekte &Uuml;bereinstimmungen und " +
            "ohne unperfekte &Uuml;bereinstimmungen angezeigt werden.</li>" +
          "<li>Gleiche Werte k&ouml;nnen mehrfach vorkommen. " +
            "Keine Stelle des Rateversuchs wird mehrfach im " +
            "angezeigten Ergebnis ausgewertet. Anzeige " +
            "einer perfekten &Uuml;bereinstimmung hat dabei " +
            "Vorrang gegen&uuml;ber unperfekter &Uuml;bereinstimmung. " +
            "Vorherige ausgewertete Ergebnisse bleiben im Spiel als " +
            "Liste zur weiteren Analyse sichtbar.</li>" +
        "</ul>",
    },
    'en-us' : {
      'menu' : 'Menu',
      'selectmenuentry' : 'Select menu entry',
      'checking' : 'Check',
      'new' : 'New',
      'license' : 'License',
      'testing' : 'Testing',
      'environment' : 'Choose a test environment',
      'menu-options' : 'Settings',
      'options' : 'Settings',
      'about' : 'About',
      'about-title' : 'About Code Breaker',
      'legal-title' : 'Legal',
      'languageselection' : 'Language selection',
      'codesize' : 'Code size',
      'digits4letters6' : '4 digits w/ 6 letters',
      'digits5letters10' : '5 digits w/ 10 letters',
      'about_text' :
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
          "<li>Iteratively a guess is " +
            "compared towards a secret code with " +
            "fixed length of digits and selected " +
            "amount of possible values per digit " +
            "(as configured in <i>options</i> menu).</li>" +
          "<li>Objective is to match the secret " +
            "code perfectly.</li>" +
          "<li>On each guess a result indicates the " +
            "amount of perfect matches and imperfect " +
            "matches represented as numerical values." +
            "<ul>" +
              "<li>Perfect matches indicate that a " +
                "digit value is included in the secret " +
                "and is placed at correct position " +
                "within the guess.</li>" +
              "<li>Imperfect matches indicate that " +
                "a digit value is included in the secret " +
                "but the position is still incorrect.</li>" +
            "</ul>" +
          "</li>" +
          "<li>Thus the secret code is found if " +
            "all digits are perfect matches and no " +
            "imperfect match are indicated on a check.</li>" +
          "<li>Same values may occur multiple " +
            "times. No digit of the guess will count " +
            "multiple times in the indicated result. " +
            "Indicating perfect matches over " +
            "imperfect ones is prioritized. Previous " +
            "check results are kept visible " +
            "in a log to use for analysis.</li>" +
        "</ul>",
    },
    'fr-fr' : {
      'menu' : 'Menu',
      'selectmenuentry' : 'S&eacute;lectionnez une option de menu',
      'checking' : 'Tester',
      'new' : 'Nouveau',
      'license' : 'Licence',
      'testing' : 'Tester',
      'environment' : 'Choisissez un environnement de test',
      'menu-options' : 'Param&eacute;trage',
      'options' : 'Param&eacute;trage',
      'about' : 'A propos',
      'about-title' : 'A propos Code Breaker',
      'legal-title' : 'Juridique',
      'languageselection' : 'Choisir de langue',
      'codesize' : 'Taille du code',
      'digits4letters6' : '4 chiffres de 6 valeurs',
      'digits5letters10' : '5 chiffres de 10 valeurs',
      'about_text' :
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
          "<li>Iteratively a guess is " +
            "compared towards a secret code with " +
            "fixed length of digits and selected " +
            "amount of possible values per digit " +
            "(as configured in <i>options</i> menu).</li>" +
          "<li>Objective is to match the secret " +
            "code perfectly.</li>" +
          "<li>On each guess a result indicates the " +
            "amount of perfect matches and imperfect " +
            "matches represented as numerical values." +
            "<ul>" +
              "<li>Perfect matches indicate that a " +
                "digit value is included in the secret " +
                "and is placed at correct position " +
                "within the guess.</li>" +
              "<li>Imperfect matches indicate that " +
                "a digit value is included in the secret " +
                "but the position is still incorrect.</li>" +
            "</ul>" +
          "</li>" +
          "<li>Thus the secret code is found if " +
            "all digits are perfect matches and no " +
            "imperfect match are indicated on a check.</li>" +
          "<li>Same values may occur multiple " +
            "times. No digit of the guess will count " +
            "multiple times in the indicated result. " +
            "Indicating perfect matches over " +
            "imperfect ones is prioritized. Previous " +
            "check results are kept visible " +
            "in a log to use for analysis.</li>" +
        "</ul>",
    },
  };
}

I18n.prototype.setLanguage = function(language) {
  this.language=language;
  var languageData=this.data[language]
  for(var msgId in languageData)
    document.getElementById(msgId).innerHTML = languageData[msgId];
};

translator = new I18n();
translator.setLanguage('en-us');

$('#radio-de-de').click(function() { translator.setLanguage('de-de'); });
$('#radio-en-usuk').click(function() { translator.setLanguage('en-us'); });
$('#radio-fr-fr').click(function() { translator.setLanguage('fr-fr'); });
