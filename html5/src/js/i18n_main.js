
function I18n() {
  this.data = {
    'menu' : {
      'de-de' : 'Men&uuml;',
      'en-us' : 'Menu',
      'fr-fr' : 'Menu',
    },
    'selectmenuentry' : {
      'de-de' : 'Men&uuml;eintrag w&auml;hlen',
      'en-us' : 'Select menu entry',
      'fr-fr' : 'S&eacute;lectionnez une option de menu',
    },
    'checking' : {
      'de-de' : 'Pr&uuml;fen',
      'en-us' : 'Check',
      'fr-fr' : 'Tester',
    },
    'new' : {
      'de-de' : 'Neu',
      'en-us' : 'New',
      'fr-fr' : 'Nouveau',
    },
    'license' : {
      'de-de' : 'Lizensierung',
      'en-us' : 'License',
      'fr-fr' : 'Licence',
    },
    'testing' : {
      'de-de' : 'Testen',
      'en-us' : 'Testing',
      'fr-fr' : 'Tester',
    },
    'environment' : {
      'de-de' : 'W&auml;hle eine Testumgebung',
      'en-us' : 'Choose a test environment',
      'fr-fr' : 'Choisissez un environnement de test',
    },
    'menu-options' : {
      'de-de' : 'Einstellungen',
      'en-us' : 'Settings',
      'fr-fr' : 'Param&eacute;trage',
    },
    'options' : {
      'de-de' : 'Einstellungen',
      'en-us' : 'Settings',
      'fr-fr' : 'Param&eacute;trage',
    },
    'about' : {
      'de-de' : '&Uuml;ber',
      'en-us' : 'About',
      'fr-fr' : 'A propos',
    },
    'about-title' : {
      'de-de' : '&Uuml;ber Code Breaker',
      'en-us' : 'About Code Breaker',
      'fr-fr' : 'A propos Code Breaker',
    },
    'legal-title' : {
      'de-de' : 'Rechtliches',
      'en-us' : 'Legal',
      'fr-fr' : 'Juridique',
    },
    'languageselection' : {
      'de-de' : 'Sprachauswahl',
      'en-us' : 'Language selection',
      'fr-fr' : 'Choisir de langue',
    },
    'codesize' : {
      'de-de' : 'Gr&ouml;&szlig;e der Codes',
      'en-us' : 'Code size',
      'fr-fr' : 'Taille du code',
    },
    'digits4letters6' : {
      'de-de' : '4 Stellen mit 6 Werten',
      'en-us' : '4 digits w/ 6 letters',
      'fr-fr' : '4 chiffres de 6 valeurs',
    },
    'digits5letters10' : {
      'de-de' : '5 Stellen mit 10 Werten',
      'en-us' : '5 digits w/ 10 letters',
      'fr-fr' : '5 chiffres de 10 valeurs',
    },
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
      'fr-fr' :
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
  for(var msgId in this.data)
    document.getElementById(msgId).innerHTML = this.data[msgId][language];
};

translator = new I18n();
translator.setLanguage('en-us');

$('#radio-de-de').click(function() { translator.setLanguage('de-de'); });
$('#radio-en-usuk').click(function() { translator.setLanguage('en-us'); });
$('#radio-fr-fr').click(function() { translator.setLanguage('fr-fr'); });
