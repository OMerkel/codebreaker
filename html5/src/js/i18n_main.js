//
// Copyright (c) 2016 Oliver Merkel
// All rights reserved.
//
// @author Oliver Merkel, <Merkel(dot)Oliver(at)web(dot)de>
//

function I18n() {
  this.data = {
    'de-de' : {
      'menu' : 'Men&uuml;',
      'selectmenuentry' : 'Men&uuml;eintrag w&auml;hlen',
      'checking4' : 'Pr&uuml;fen',
      'checking5' : 'Pr&uuml;fen',
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
      'checking4' : 'Check',
      'checking5' : 'Check',
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
      'checking4' : 'Tester',
      'checking5' : 'Tester',
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
    'es-es' : {
      'menu' : 'Men&uacute;',
      'selectmenuentry' : 'Seleccione la entrada de men&uacute;',
      'checking4' : 'Comprobar',
      'checking5' : 'Comprobar',
      'new' : 'Nuevo',
      'license' : 'Licencia',
      'testing' : 'Pruebas',
      'environment' : 'Elija un entorno de prueba',
      'menu-options' : 'Par&aacute;metros',
      'options' : 'Par&aacute;metros',
      'about' : 'Sobre',
      'about-title' : 'Sobre Code Breaker',
      'legal-title' : 'Jur&iacute;dico',
      'languageselection' : 'Selecci&oacute;n de idioma',
      'codesize' : 'Tama&ntilde;o del c&oacute;digo',
      'digits4letters6' : '4 d&iacute;gitos con 6 valores',
      'digits5letters10' : '5 d&iacute;gitos con 10 valores',
      'about_text' :
        // Spanish translation of about_text done
        // in collaboration of Oliver Merkel and Johannes Brunner
        "<p><b>Code Breaker</b> es una variaci&oacute;n " +
          "de un juego de origen desconocido llamado " +
          "<i>toros y vacas</i> (en alem&aacute;n " +
          "<i>Bullen und K&uuml;he</i>). El principio del " +
          "juego es bajo el dominio p&uacute;blico. " +
          "Tambi&eacute;n existen versiones comerciales " +
          "publicados y disponibles de <i>toros y vacas</i> " +
          "de otros fabricantes bajo diferentes nombres " +
          "y marcas comerciales. <i>Code Breaker</i> es " +
          "licenciado por la MIT y utiliza el principio " +
          "de <i>toros y vacas</i> (en alem&aacute;n " +
          "<i>Bullen und K&uuml;he</i>) de dominio " +
          "p&uacute;blico. Se incluyen las bibliotecas " +
          "de software sin modificaciones por parte de " +
          "terceros que est&aacute;n bajo licencias de " +
          "software libre.</p>" +
        "<h3>Reglas</h3>" +
        "<p>Estas son las reglas de <i>Code Breaker</i> en detalle.</p>" +
        "<ul>" +
          "<li>Se compara los repetidos intentos con " +
            "un c&oacute;digo secreto con una cantidad " +
            "fija de d&iacute;gitos y una cantidad determinada " +
            "de valores por d&iacute;gito (como seleccionado " +
            "en el men&uacute; <i>Par&aacute;metros</i>).</li>" +
          "<li>El objetivo es lograr una combinaci&oacute;n " +
            "perfecta que coincide con el c&oacute;digo secreto.</li>" +
          "<li>Despu&eacute;s de cada intento el resultado " +
            "consta de la cantidad de d&iacute;gitos con coincidencia " +
            "perfecta y con coincidencia imperfecta." +
            "<ul>" +
              "<li>Coincidencia perfecta significa, " +
                "que un d&iacute;gito est&aacute; en el c&oacute;digo " +
                "secreto y tambi&eacute;n esta en la " +
                "posici&oacute;n correcta.</li>" +
              "<li>Coincidencia imperfecta significa, que " +
                "un d&iacute;gito est&aacute; en el c&oacute;digo " +
                "secreto pero la posici&oacute;n todav&iacute;a " +
                "no es correcta.</li>" +
            "</ul>" +
          "</li>" +
          "<li>Por lo tanto, se considera el c&oacute;digo " +
            "secreto descubierto si todos d&iacute;gitos coinciden " +
            "perfectamente y no hay coincidencias imperfectas.</li>" +
          "<li>Los mismos valores pueden aparecer m&aacute;s " +
            "de una vez. En el resultado mostrado, los d&iacute;gitos " +
            "no son comprobadas mas de una vez. La " +
            "indicaci&oacute;n de coincidencias perfectas tiene " +
            "prioridad sobre coincidencias imperfectas. " +
            "Resultados anteriores permanecen visibles en " +
            "una lista para el an&aacute;lisis.</li>" +
        "</ul>",
    },
    'pt-pt' : {
      'menu' : 'Menu',
      'selectmenuentry' : 'Escolha uma op&ccedil;&atilde;o de menu',
      'checking4' : 'Checar',
      'checking5' : 'Checar',
      'new' : 'Novo',
      'license' : 'Licen&ccedil;a',
      'testing' : 'Prova',
      'environment' : 'Escolha um ambiente de teste',
      'menu-options' : 'Par&acirc;metros',
      'options' : 'Par&acirc;metros',
      'about' : 'Sobre',
      'about-title' : 'Sobre Code Breaker',
      'legal-title' : 'Jur&iacute;dico',
      'languageselection' : 'Selec&ccedil;&atilde;o do idioma',
      'codesize' : 'Tamanho do c&oacute;digo',
      'digits4letters6' : '4 d&iacute;gitos com 6 valores',
      'digits5letters10' : '5 d&iacute;gitos com 10 valores',
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
$('#radio-es-es').click(function() { translator.setLanguage('es-es'); });
$('#radio-fr-fr').click(function() { translator.setLanguage('fr-fr'); });
$('#radio-pt-pt').click(function() { translator.setLanguage('pt-pt'); });
