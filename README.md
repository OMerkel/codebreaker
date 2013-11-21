
_Since everybody was Kung Fu fighting,_  
_those jerks were fast as lightning..._

Code Breaker 4.6
================

__Keywords:__ _Coding Dojo, Kata, Code Breaker, TDD (Test Driven Development), BDD (Behavior Driven Development), Jasmine, QUnit, JQuery, JQuery Mobile, Firefox OS (FxOs), Mobile Devices, HTML5, CSS, Javascript, i18n, l10n, resolution awareness, Touch Events vs. Mouse Events_

__Mind:__ _Numbering 4.6 in the title reflects that this variant shall implement secret codes of size four digits. Each digit is selected from a range of six values allowed for the guess as soon as a full application is implemented. The intended class to compare a guess towards the secret code is allowed not to perform range checks. This aspect is typically neglected in Codebreaker Kata runs of Coding Dojos performed._

__Presentation Mode:__ Targeted classroom environment, time restriction (time boxed presentation)

__Code Breaker__ is a synonym for a puzzle also known as [_Bulls and Cows_](http://en.wikipedia.org/wiki/Bulls_and_cows). The project hosted here implements this as an application. Nonetheless the objectives of the project are tightly focused on the related underlying development process and the process implementation as a proof of concept and case study described as follows.

Main Objectives
---------------

It is intended to demonstrate that BDD (__Behavior Driven Development__) or more general TDD (__Test Driven Development__) is not a matter of framework selection. Thesis is that BDD or TDD approach is only weakly supported by the framework. It is more a matter of test specification mapping architecture constraints to decide whether general testing or behavior is driving the development process. Therefore we run the Codebreaker Kata twice or in parallel using a BDD approach

* in __BDD Jasmine framework__ and
* in __TDD QUnit framework__

It is expected that each framework allows to formulate similar tests. Assumption is that no blockers are coming up root caused by selection of the framework.

More Objectives
---------------

* Demonstrate how the code can be integrated in an application context.
* Make the same application run on a range of target mobile devices (FxOs, Android, iOS, Blackberry devices).
* Allow the User Interface / Human Machine Interface to process both Touch Event and Mouse Event types to support different device classes (Desktop systems, Tablets, Mobile phones).
* Closely bind unit tests / regression tests to application to run the tests from inside the application directly on target systems on-the-fly.
* Make the application resolution aware (Optimization on small screen resolutions and high Desktop resolutions).
* Demonstrate internationalization (i18n) through DOM (Document Object Model) modification instead of duplicating webpages using localization (l10n) per language setting.

Contributors / Authors
----------------------

<table>
  <tr>
    <td><img height="265" ondragstart="return false;" alt="Oliver Merkel, Creative Commons License, This image is licensed under a Creative Commons Attribution-NonCommercial-NoDerivs 3.0 Unported License." src="html5/src/img/oliver.jpg" /></td>
    <td><p>Oliver Merkel,<br /><a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/3.0/deed.en_US"><img alt="Creative Commons License" style="border-width:0" src="http://i.creativecommons.org/l/by-nc-nd/3.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" href="http://purl.org/dc/dcmitype/StillImage" property="dct:title" rel="dct:type">This image</span> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/3.0/deed.en_US">Creative Commons Attribution-NonCommercial-NoDerivs 3.0 Unported License</a>.</p>
    </td>
  </tr>
</table>

_All logos, brands, and trademarks mentioned belong to their respective owners._
