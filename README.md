_Since everybody was Kung Fu fighting,_  
_those jerks were fast as lightning..._

Code Breaker 4.6
================

__Keywords:__ _Coding Dojo, Kata, Code Breaker, TDD (Test Driven Development), BDD (Behavior Driven Development), Jasmine, QUnit, JQuery, JQuery Mobile, Firefox OS (FxOs), Mobile Devices, HTML5, CSS, Javascript, i18n, l10n, resolution awareness, Touch Events vs. Mouse Events_

__Mind:__ _Numbering scheme_ __4.6__ _in the title reflects that this variant shall implement secret codes of size_ __four__ _digits. Each digit is selected from a range of_ __six__ _values allowed for the guess as soon as a full application is implemented._
<pre>
function isValid(guess) {
  var codePattern=new RegExp("^[a-f]{4}");
  return codePattern.test(guess);
}
</pre>
_It is intended to implement a class to compare a guess towards the secret code. The class is allowed not to perform range checks. Which means that guesses might exist containing characters valued out of range. This aspect of range checking is typically neglected in Codebreaker Kata runs of Coding Dojos performed._


__Presentation Mode:__ Targeted classroom environment, time restriction (time boxed presentation)

__Code Breaker__ is a synonym for a puzzle also known as [_Bulls and Cows_](http://en.wikipedia.org/wiki/Bulls_and_cows). The project hosted here implements this as an application. Nonetheless the objectives of the project are tightly focused on the related underlying development process and the process implementation as a proof of concept and case study described as follows.

In _The RSpec Book, Behaviour Driven Development with RSpec, Cucumber and Friends_ by David Chelimsky, 2009, the Code Breaker Kata is a popular example often referred to. The book starts by explaining what TDD is all about. It gives the impression to target smaller project teams or single developers since it mentions issues identified on non available distributed or non separated tester roles. Nevertheless one might doubt that developer tests driving the developer's own development process automagically are the same type of regression or unit tests an explicit test developer would implement on passing code to a bigger test organization unit. Besides that other types of tests would probably be targeted as well. The book describes BDD as the next step. _Behavior_ is described to differ from _structural details_. The tools used for the examples are strongly bound to Ruby language. Such that readers are looking for similar frameworks for other languages depending on their project. _Code Breaker 4.6_ is supposed to advise whether to use a TDD framework or BDD framework and give an idea on aspects to think about while decision making on your tool chain. Javascript language is just chosen as a possible language example being different from Ruby here. Reading _The RSpec Book_ is recommended, too, since the strategies trained in there are fundamental. Although you should be aware of the included practices' constraints influencing validity towards your project.

Main Objectives
---------------

It is intended to demonstrate that BDD (__Behavior Driven Development__) or more general TDD (__Test Driven Development__) clearly is not a matter of framework selection. Thesis is that BDD or TDD approach is only weakly supported by the framework. The _behavior_ of a system describes an architectural aspect visible from outside the system. So BDD is more a matter of the test specification mapping the architecture constraints. This mapping reflects whether general testing or behavior is driving the development process. Therefore we run the Codebreaker Kata twice or in parallel using a BDD approach

* in __BDD Jasmine framework__ and
* in __TDD QUnit framework__

It is expected that each framework allows to formulate similar tests. Assumption is that no related blockers are coming up being root caused by selection of the framework.

More Objectives
---------------

* Demonstrate how the code can be integrated in an application context.
* Make the same application run on a range of target mobile devices (FxOs, Android, iOS, Blackberry devices).
* Allow the User Interface / Human Machine Interface to process both Touch Event and Mouse Event types to support different device classes (Desktop systems, Tablets, Mobile phones).
* Closely bind unit tests / regression tests to application to run the tests from inside the application directly on target systems on-the-fly.
* Make the application resolution aware (Optimization on small screen resolutions and high Desktop resolutions).
* Demonstrate internationalization (i18n) through DOM (Document Object Model) modification instead of duplicating webpages using localization (l10n) per language setting.

_The RSpec Book_ proposes to mock a command line user interface. This is supposed to enable the developer to write high level behavior tests from an end user's point of view. _Code Breaker 4.6_ could surely mock a HMI (Human Machine Interface) in a similar way for the plain vanilla HMI and the JQuery Mobile HMI. Anyway this is avoided and the assumption is that when working on these objectives a different environment is available as before (when focusing on main objectives). Developing both the plain vanilla HMI and the JQuery Mobile HMI is done in a non test driven approach. Still the underlying core business logic is developed on BDD. This is done as a base for discussion on mixing BDD with traditional development scenarios. Discussion subjects might include efficiency of development, quality of overall product code and communication aspects of different teams or team members and how do they possibly benefit from each other here.

Consider that this might occur in your project team because

* concepts of mocking HMI functions or other APIs might be unknown, or
* mocking is just known up to a certain level of APIs (differences of
    * STDOUT/STDIN, command line, focused mocking like in The RSpec Book scenario in contrast to
    * simple graphical or
    * browser encapsulated environments up to
    * a complex level where third party graphical frameworks are included or
    * cross platform scenarios are targeted / embedded devices / mobile environments), or
* user stories, specification, and requirements are still unclear in the current stage of your project although development has already started, or
* delivery of documents, code parts, or target hardware are delayed, or
* coworkers stick to traditional development processes and methodology.

In such a suboptimal scenario the listed objectives above shall be reached. Discussion shall be how the team can still leave traditional development processes and methodology softly over time. To discuss differences and limitations a simplified HMI (plain vanilla design) and a complex graphical HMI including third party code with additional functionality is implemented.

Anyway enjoy the Code Breaker 4.6 !

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
