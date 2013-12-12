Logos and trademarks belong to their respective owners.

__The MIT License (MIT)__

Copyright (c) 2013, Oliver Merkel, Merkel(dot)Oliver(at)web(dot)de

__Follow Me__

* An application to advise on guesses of Code Breaker implementations

_Contributors:_
* Oliver Merkel, Merkel(dot)Oliver(at)web(dot)de

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


_"He who would valiant be `gainst all disaster,
Let him in constancy follow the Master."_

To start python doctest use:

    $ python -m doctest -v followme.py

To start the application directly use:

    $ python followme.py

Sample of an interactive session. The user has to enter the determined results of perfect and imperfect matches:

    I assume you try to find a 4 digit secret in Codebreaker.
    Each digit has a value ranged from letter 'a' to letter 'f'.
    You should guess: aabb
    perfect: 1
    imperfect: 0
    You should guess: acdd
    perfect: 0
    imperfect: 2
    You should guess: cace
    perfect: 3
    imperfect: 0
    You should guess: aecf
    perfect: 0
    imperfect: 4
    Final guess: cafe
    Congratulations!
