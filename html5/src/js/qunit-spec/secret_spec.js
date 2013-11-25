//
// @author Oliver Merkel, <Merkel(dot)Oliver(at)web(dot)de>
//

module('A simple secret code', {
  setup: function() {
    simpleSecret = new Secret('abcd');
  },
});

test('is compared to a guess having no match at all', function () {
  deepEqual(simpleSecret.compare('efgh'), [ 0, 0 ]);
  });

test('is compared to a guess having exactly one match at 1st position', function () {
  deepEqual(simpleSecret.compare('axfg'), [ 1, 0 ]);
  });

test('is compared to a guess having exactly one match at 2nd position', function () {
  deepEqual(simpleSecret.compare('ebfg'), [ 1, 0 ]);
  });

test('is compared to a guess having exactly one match at 3rd position', function () {
  deepEqual(simpleSecret.compare('eece'), [ 1, 0 ]);
  });

test('is compared to a guess having exactly one match at 4th position', function () {
  deepEqual(simpleSecret.compare('effd'), [ 1, 0 ]);
  });

test('is compared to a guess having two exact and no imperfect matches', function () {
  deepEqual(simpleSecret.compare('xbxd'), [ 2, 0 ]);
  });

test('is compared to a guess having three exact matches', function () {
  deepEqual(simpleSecret.compare('abxd'), [ 3, 0 ]);
  });

test('is compared to a guess being a complete match', function () {
  deepEqual(simpleSecret.compare('abcd'), [ 4, 0 ]);
  });

test('is compared to a guess indicating not even a single imperfect match', function () {
  deepEqual(simpleSecret.compare('xxxx'), [ 0, 0 ]);
  });

test('is compared to a guess indicating an imperfect match at 1st position', function () {
  deepEqual(simpleSecret.compare('dxxx'), [ 0, 1 ]);
  });

test('is compared to a guess indicating an imperfect match at 2nd position', function () {
  deepEqual(simpleSecret.compare('xaxx'), [ 0, 1 ]);
  });

test('is compared to a guess indicating two imperfect matches', function () {
  deepEqual(simpleSecret.compare('dxxc'), [ 0, 2 ]);
  });

test('is compared to a guess without counting same imperfect matching digits multiple times', function () {
  deepEqual(simpleSecret.compare('bxxb'), [ 0, 1 ]);
  });

test('is compared to a guess without counting same perfect matching digits multiple times', function () {
  deepEqual(simpleSecret.compare('cbcb'), [ 2, 0 ]);
  });

test('is compared to a guess having two exact matches and two non positional matches', function () {
  deepEqual(simpleSecret.compare('cbad'), [ 2, 2 ]);
  });

test('is compared to a guess having three exact matches and one duplicated non scoring', function () {
  deepEqual(simpleSecret.compare('abad'), [ 3, 0 ]);
  });

module('A secret code having two duplicates', {
  setup: function() {
    twoDuplicatesSecret = new Secret('baab');
  },
});

test('is compared to a guess having two pairs of duplicates all being non positional', function () {
  deepEqual(twoDuplicatesSecret.compare('abba'), [ 0, 4 ]);
  });

test('is compared to a guess having duplicates. One duplicate being positional match', function () {
  deepEqual(twoDuplicatesSecret.compare('xaax'), [ 2, 0 ]);
  });
