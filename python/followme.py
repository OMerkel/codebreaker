'''
Logos, brands, and trademarks belong to their respective owners.

The MIT License (MIT)

Copyright (c) 2016, Oliver Merkel, Merkel(dot)Oliver(at)web(dot)de
Follow Me
 An application to advise on guesses of Code Breaker implementations

Contributors:
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


"He who would valiant be `gainst all disaster,
Let him in constancy follow the Master."

To start python doctest use:

$ python -m doctest -v followme.py

To start the application directly use:

$ python followme.py

>>> advisor = FollowMe()
'''

from lxml import etree

class FollowMe:
    '''
    Mock input for a whole session to be tested here.

    >>> advisor = FollowMe()
    >>> advisor.mockData = [ '1', '0', '1', '0', '0', '1', '2', '1' ]
    >>> advisor.inputData = advisor.mockInput
    >>> advisor.run()
    You should guess: aabb
    perfect: 1
    imperfect: 0
    You should guess: acdd
    perfect: 1
    imperfect: 0
    You should guess: bebc
    perfect: 0
    imperfect: 1
    You should guess: aaef
    perfect: 2
    imperfect: 1
    Final guess: afee
    Congratulations!

    >>> advisor = FollowMe()
    >>> advisor.mockData = [ '1', '0', '0', '2', '3', '0', '0', '4' ]
    >>> advisor.inputData = advisor.mockInput
    >>> advisor.run()
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
    '''

    __PERFECT__ = 'perfect'
    __IMPERFECT__ = 'imperfect'
    __PATHPATTERN__ = 'guess[@perfect=\'{perfect}\' and' + \
        ' @imperfect=\'{imperfect}\']'

    def __init__(self):
        '''
        C`tor of FollowMe. Instances of the class hold a status. Testing for the initial state here.
        
        >>> advisor = FollowMe()
        >>> advisor.currentElement.attrib['code']
        'aabb'
        >>> len(advisor.currentElement.xpath('guess'))
        12
        >>> len(advisor.currentElement.xpath('guess[@perfect=\\'1\\' and @imperfect=\\'3\\']'))
        0
        >>> len(advisor.currentElement.xpath('guess[@perfect=\\'1\\' and @imperfect=\\'4\\']'))
        0
        >>> len(advisor.currentElement.xpath('guess[@perfect=\\'2\\' and @imperfect=\\'3\\']'))
        0
        >>> len(advisor.currentElement.xpath('guess[@perfect=\\'2\\' and @imperfect=\\'4\\']'))
        0
        >>> len(advisor.currentElement.xpath('guess[@perfect=\\'3\\']'))
        1
        >>> len(advisor.currentElement.xpath('guess[@perfect=\\'3\\' and @imperfect=\\'0\\']'))
        1
        '''
        tree = etree.parse('strategy.xml')
        root = tree.getroot()
        # etree.dump(root)
        self.currentElement = root.findall('guess')[0]
        self.inputData = input

    def nextGuess(self, result):
        '''
        >>> advisor = FollowMe()
        >>> advisor.currentElement.attrib['code']
        'aabb'
        >>> advisor.nextGuess({ advisor.__PERFECT__: '1', advisor.__IMPERFECT__: '0' })
        >>> advisor.currentElement.attrib['code']
        'acdd'
        >>> advisor.nextGuess({ advisor.__PERFECT__: '0', advisor.__IMPERFECT__: '2' })
        >>> advisor.currentElement.attrib['code']
        'cace'
        >>> advisor.nextGuess({ advisor.__PERFECT__: '3', advisor.__IMPERFECT__: '0' })
        >>> advisor.currentElement.attrib['code']
        'aecf'
        >>> advisor.nextGuess({ advisor.__PERFECT__: '0', advisor.__IMPERFECT__: '4' })
        >>> advisor.currentElement.attrib['code']
        'cafe'
        '''
        path = self.__PATHPATTERN__.format(
            perfect=result[self.__PERFECT__],
            imperfect=result[self.__IMPERFECT__] )
        lookUp = self.currentElement.xpath(path)
        if not lookUp is None:
            self.currentElement = lookUp[0]

    def getInput(self):
        '''
        >>> advisor = FollowMe()
        >>> advisor.mockData = [ '1', '2', '4', '0' ]
        >>> advisor.inputData=advisor.mockInput

        >>> answer = advisor.getInput()
        perfect: 1
        imperfect: 2
        >>> answer[FollowMe.__PERFECT__]
        '1'
        >>> answer[FollowMe.__IMPERFECT__]
        '2'

        >>> answer = advisor.getInput()
        perfect: 4
        imperfect: 0
        >>> answer[FollowMe.__PERFECT__]
        '4'
        >>> answer[FollowMe.__IMPERFECT__]
        '0'
        '''
        perfect = self.inputData("perfect: ")
        if '4' == perfect:
            print('imperfect: 0')
            imperfect = '0'
        else:
            imperfect = self.inputData("imperfect: ")
        result = { self.__PERFECT__: perfect, self.__IMPERFECT__: imperfect }
        return result

    def run(self):
        '''
        >>> advisor = FollowMe()
        >>> advisor.mockData = [ '4' ]
        >>> advisor.inputData=advisor.mockInput
        >>> advisor.run()
        You should guess: aabb
        perfect: 4
        imperfect: 0
        Congratulations!

        >>> advisor = FollowMe()
        >>> advisor.mockData = [ '1', '0', '4' ]
        >>> advisor.inputData=advisor.mockInput
        >>> advisor.run()
        You should guess: aabb
        perfect: 1
        imperfect: 0
        You should guess: acdd
        perfect: 4
        imperfect: 0
        Congratulations!
        '''
        skip = False
        while not self.currentElement.find('guess') is None and not skip:
            print('You should guess:', self.currentElement.attrib['code'])
            result = self.getInput()
            skip = '4' == result[self.__PERFECT__]
            if not skip:
                self.nextGuess( result )
                skipLoop = True
        if not skip:
            print('Final guess:', self.currentElement.attrib['code'])
        print('Congratulations!');

    def mockInput(self, message):
        '''
        >>> advisor = FollowMe()
        >>> advisor.mockData = [ '1', '0', '4' ]
        >>> advisor.mockInput('Enter a valid number: ')
        Enter a valid number: 1
        '1'
        >>> advisor.mockInput('(8 / 2) - 4 = ')
        (8 / 2) - 4 = 0
        '0'
        >>> advisor.mockInput('Amount of quarters per hour: ')
        Amount of quarters per hour: 4
        '4'
        '''
        result = self.mockData.pop(0)
        print(message + result)
        return result

if '__main__' == __name__:
    print('''I assume you try to find a 4 digit secret in Codebreaker.
Each digit has a value ranged from letter 'a' to letter 'f'.''')
    FollowMe().run()
