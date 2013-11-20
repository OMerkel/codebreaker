
_Since everybody was Kung Fu fighting,_
_those jerks were fast as lightning..._

Code Breaker 4.6
================

__Keywords:__ _Coding Dojo, Kata, Code Breaker, TDD (Test Driven Development), BDD (Behavior Driven Development), Jasmine, QUnit, JQuery, JQuery Mobile, Firefox OS (FxOs), Mobile Devices, HTML5, CSS, Javascript

__Mind:__ _Numbering 4.6 in the title reflects that this variant shall implement secret codes of size four digits. Each digit is selected from a range of six values allowed for the guess as soon as a full application is implemented. The intended class to compare a guess towards the secret code is allowed not to perform range checks. This aspect is typically neglected in Codebreaker Kata runs of Coding Dojos performed._

Main Objectives
===============

It is intended to demonstrate that BDD (__Behavior Driven Development__) or more general TDD (__Test Driven Development__) is not a matter of framework selection. Thesis is that BDD or TDD approach is only weakly supported by the framework. It is more a matter of test specification mapping architecture constraints to decide whether general testing or behavior is driving the development process. Therefore we run the Codebreaker Kata twice or in parallel using a BDD approach

* in __BDD Jasmine framework__ and
* in __TDD QUnit framework__

It is expected that each framework allows to formulate similar tests and no blockers coming up due to selection of the framework.

More Objectives
===============

* Demonstrate how the code can be integrated in an application context.
* Make the same application run on a range of target mobile devices (FxOs, Android, IOS, Blackberry devices).
* Closely bind unit tests / regression tests to application to run the tests from inside the application directly on target systems.
* Make the application resolution aware (Optimization on small screen resolutions and high Desktop resolutions).
* Demonstrate i18n through DOM (Document Object Model) modification instead of duplicating webpages per language setting.

All logos, brands, and trademarks mentioned belong to their respective owners.
