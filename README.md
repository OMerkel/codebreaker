Code Breaker
============

__Keywords:__ _Coding Dojo, Kata, Code Breaker, TDD (Test Driven Development), BDD (Behavior Driven Development), Jasmine, QUnit, JQuery, JQuery Mobile, Firefox OS (FxOs), Mobile Devices, HTML5, CSS, Javascript, i18n, l10n, resolution awareness, Touch Events vs. Mouse Events_

Click icons for direct online usage

| <a href="http://omerkel.github.io/codebreaker/html5/src/"><img height="64" alt="Start Code Breaker online" src="http://omerkel.github.io/codebreaker/html5/src/img/icons/codebreaker-128.png" /></a> | <a href="http://omerkel.github.io/codebreaker/codebreaker46vanilla/src/intro.html"><img height="64" alt="Start Code Breaker 4.6 Vanilla online" src="http://omerkel.github.io/codebreaker/codebreaker46vanilla/src/img/icons/codebreaker-vanilla-128.png" /></a> | <a href="http://omerkel.github.io/codebreaker/codebreaker510vanilla/src/intro.html"><img height="64" alt="Start Code Breaker 5.10 Vanilla online" src="http://omerkel.github.io/codebreaker/codebreaker510vanilla/src/img/icons/codebreaker-vanilla-128.png" /></a> |
| --- | --- | --- |
| <a href="http://omerkel.github.io/codebreaker/html5/src">Start Code Breaker online</a> | <a href="http://omerkel.github.io/codebreaker/codebreaker46vanilla/src/intro.html">Start Code Breaker 4.6 Vanilla online</a> | <a href="http://omerkel.github.io/codebreaker/codebreaker510vanilla/src/intro.html">Start Code Breaker 5.10 Vanilla online</a> |

* see <b>[releases/tag/release_1.2](https://github.com/OMerkel/codebreaker/releases/tag/release_1.2)</b>
    * <em>Start an online</em> <b>Code Breaker</b> <em>session on</em> http://omerkel.github.io/codebreaker/html5/src
    * <em>Also published in</em> <a href="https://marketplace.firefox.com/app/codebreaker"><img align="middle" width="128px" src="res/img/marketplace_logo.png" /></a>
* see <b>[releases/tag/release_vanilla46_1.0](https://github.com/OMerkel/codebreaker/releases/tag/release_vanilla46_1.0)</b>
    * online version [Code Breaker 4.6 Plain Vanilla](http://omerkel.github.io/codebreaker/codebreaker46vanilla/src/intro.html)
    * published in <a href="https://marketplace.firefox.com/app/cbreaker46"><img alt='Firefox Marketplace' src="res/img/marketplace_logo.png" width="128" /></a>
* see <b>[releases/tag/release_vanilla510_1.0](https://github.com/OMerkel/codebreaker/releases/tag/release_vanilla510_1.0)</b>
    *  online version [Code Breaker 5.10 Plain Vanilla](http://omerkel.github.io/codebreaker/codebreaker510vanilla/src/intro.html)

<em>Runs in various browsers on</em>

* <em>desktop systems like BSDs, Linux, Win, MacOS and</em>
* <em>mobile platforms like Android, FirefoxOS, iOS.</em>

__Mind:__
* _Numbering scheme_ _if_ __4.6__ _is used in the title then this reflects that this variant shall implement secret codes of size_ __four__ _digits. Each digit is selected from a range of_ __six__ _values allowed for the guess._
<pre>
function isValid(guess) {
  var codePattern=new RegExp("^[a-f]{4}");
  return codePattern.test(guess);
}
</pre>
* _Numbering scheme_ _if_ __5.10__ _is used in the title then this reflects that this variant shall implement secret codes of size_ __five__ _digits. Each digit is selected from a range of_ __ten__ _values allowed for the guess._
<pre>
function isValid(guess) {
  var codePattern=new RegExp("^[a-j]{5}");
  return codePattern.test(guess);
}
</pre>
_It is intended to implement a class to compare a guess towards the secret code. The class is allowed not to perform range checks. Which means that guesses might exist containing characters valued out of range. This aspect of range checking is typically neglected in Codebreaker Kata runs of Coding Dojos performed._

__Code Breaker__ is a synonym for a puzzle also known as [_Bulls and Cows_](http://en.wikipedia.org/wiki/Bulls_and_cows). Besides implementing the application the objectives here are tightly focused on the related underlying development process and the process implementation as a proof of concept and case study described as follows.

In _The RSpec Book, Behaviour Driven Development with RSpec, Cucumber and Friends_ by David Chelimsky, 2009, the Code Breaker Kata is a popular example often referred to. The book starts by explaining what TDD is all about. It gives the impression to target smaller project teams or single developers. This is since it mentions issues identified on non available distributed or non separated tester roles. Nevertheless one might doubt that developer tests driving the developer's own development process automagically are the same type of regression or unit tests an explicit test developer would implement on passing code to a bigger test organization unit. Besides, other types of tests would probably be targeted as well. The book describes BDD as _the next step_. _Behavior_ is described to differ from _structural details_. The tools used for the examples are strongly bound to Ruby language. Such that readers are looking for similar frameworks for other languages depending on their project. _Code Breaker 4.6_ is supposed to advise whether to use a TDD framework or BDD framework and give an idea on aspects to think about while decision making on your tool chain. Javascript language is just chosen as a possible language example being different from Ruby here. Reading _The RSpec Book_ is recommended, too, since the strategies trained in there are fundamental. Although you should be aware of the included practice constraints influencing validity towards your project.

Main Objectives
---------------

It is intended to demonstrate that BDD (__Behavior Driven Development__) or more general TDD (__Test Driven Development__) clearly is not a matter of framework selection. Thesis is that BDD or TDD approach is only weakly supported by the framework itself. Any of these frameworks can be used to support both principles. The _behavior_ of a system describes an architectural aspect visible from outside the system. So BDD is more a matter of the test specification mapping the architecture constraints. This mapping reflects whether general testing or behavior is driving the development process. Therefore we run the Codebreaker Kata twice or in parallel using just a BDD approach

* in __BDD Jasmine framework__ and
    * see bdd-jasmine.html in [releases/tag/main_objectives_reached](https://github.com/OMerkel/codebreaker/releases/tag/main_objectives_reached) 
* in __TDD QUnit framework__, too.
    * see bdd-qunit.html in [releases/tag/main_objectives_reached](https://github.com/OMerkel/codebreaker/releases/tag/main_objectives_reached) 

It is expected that each framework allows to formulate similar tests. Assumption is that no related blockers are coming up being root caused by selection of the framework.

More Objectives
---------------

* Demonstrate how the code can be integrated in an application context.
* Make the same application run on a range of target mobile devices (FxOs, Android, iOS, Blackberry, Windows Phone devices).
* Allow the User Interface / Human Machine Interface to process both Touch Event and Mouse Event types to support different device classes (Desktop systems, Tablets, Mobile phones).
* Closely bind unit tests / regression tests to application to run the tests from inside the application directly on target systems on-the-fly.
* Make the application resolution aware (Optimization on small screen resolutions and high Desktop resolutions).
* Demonstrate internationalization (i18n) through DOM (Document Object Model) modification instead of duplicating webpages using localization (l10n) per language setting.


_The RSpec Book_ proposes to mock a command line user interface. This is supposed to enable the developer to write high level behavior tests from an end user's point of view. _Code Breaker_ could surely mock an HMI (Human Machine Interface) in a similar way for the plain vanilla HMI and the JQuery Mobile HMI. Anyway this is avoided and the aspect of HMI mockup is neglected. Developing both the plain vanilla HMI and the JQuery Mobile HMI is done in a non test driven approach. Still the underlying core business logic is developed on BDD. By neglecting this aspect we get a base for discussion on mixing BDD with traditional development scenarios. Discussion subjects might include efficiency of development, quality of overall product code and communication aspects of different teams or team members and how they possibly could benefit from each other here.

Consider that this might occur in your project team because

* concepts of mocking HMI functions or other APIs might be unknown, or
* mocking is just known up to a certain level of APIs, e.g. showing differences of
    * STDOUT/STDIN, command line, focused mocking like in _The RSpec Book_ scenario in contrast to
    * simple graphical or
    * browser encapsulated environments up to
    * a complex level where third party graphical frameworks are included or
    * cross platform development scenarios are targeted / embedded devices / mobile environments, or
* user stories, specification, and requirements are still unclear in the current stage of your project although development has already started, or
* delivery of documents, code parts, or target hardware are delayed, or
* coworkers stick to traditional development processes and methodology, or even caused by other reasons.

In such a suboptimal scenario the listed objectives above shall be reached. Discussion shall be how the team can still benefit in migrating from traditional development processes and methodology softly over time. To discuss differences and limitations a simplified HMI (plain vanilla design) and a complex graphical HMI including third party code with additional functionality is implemented.

Anyway enjoy Code Breaker or specialized Code Breaker 4.6 and Code Breaker 5.10 application variants!

Contributors / Authors
----------------------

<table>
  <tr>
    <td width="35%"><img width="100%" ondragstart="return false;" alt="Oliver Merkel, Creative Commons License, This image is licensed under a Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License." src="html5/src/img/oliver.jpg" /></td>
    <td><p>Oliver Merkel, Project Lead and Developer<br /><a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/"><img alt="Creative Commons License" style="border-width:0" src="http://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png" /></a><br />This image is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License</a>.    
    </p>
    </td>
  </tr>
  <tr>
    <td>&nbsp;</td>
    <td><p>Johannes Brunner, Support and collaboration on Spanish translation of about_text .</p>
    </td>
  </tr>
</table>

_All logos, brands, and trademarks mentioned belong to their respective owners._
