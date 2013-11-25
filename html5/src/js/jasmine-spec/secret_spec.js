//
// @author Oliver Merkel, <Merkel(dot)Oliver(at)web(dot)de>
//

describe('A simple secret code', function () {
  beforeEach(function() {
    simpleSecret = new Secret('abcd');
  });

  it('is compared to a guess having no match at all', function () {
    expect(simpleSecret.compare('efgh')).toEqual([ 0, 0 ]);
  });

  it('is compared to a guess having exactly one match at 1st position', function () {
    expect(simpleSecret.compare('axfg')).toEqual([ 1, 0 ]);
  });

  it('is compared to a guess having exactly one match at 2nd position', function () {
    expect(simpleSecret.compare('ebfg')).toEqual([ 1, 0 ]);
  });

  it('is compared to a guess having exactly one match at 3rd position', function () {
    expect(simpleSecret.compare('eece')).toEqual([ 1, 0 ]);
  });

  it('is compared to a guess having exactly one match at 4th position', function () {
    expect(simpleSecret.compare('effd')).toEqual([ 1, 0 ]);
  });

  it('is compared to a guess having two exact and no imperfect matches', function () {
    expect(simpleSecret.compare('xbxd')).toEqual([ 2, 0 ]);
  });

  it('is compared to a guess having three exact matches', function () {
    expect(simpleSecret.compare('abxd')).toEqual([ 3, 0 ]);
  });

  it('is compared to a guess being a complete match', function () {
    expect(simpleSecret.compare('abcd')).toEqual([ 4, 0 ]);
  });

  it('is compared to a guess indicating not even a single imperfect match', function () {
    expect(simpleSecret.compare('xxxx')).toEqual([ 0, 0 ]);
  });

  it('is compared to a guess indicating an imperfect match at 1st position', function () {
    expect(simpleSecret.compare('dxxx')).toEqual([ 0, 1 ]);
  });

  it('is compared to a guess indicating an imperfect match at 2nd position', function () {
    expect(simpleSecret.compare('xaxx')).toEqual([ 0, 1 ]);
  });

  it('is compared to a guess indicating two imperfect matches', function () {
    expect(simpleSecret.compare('dxxc')).toEqual([ 0, 2 ]);
  });

  it('is compared to a guess without counting same imperfect matching digits multiple times', function () {
    expect(simpleSecret.compare('bxxb')).toEqual([ 0, 1 ]);
  });

  it('is compared to a guess without counting same perfect matching digits multiple times', function () {
    expect(simpleSecret.compare('cbcb')).toEqual([ 2, 0 ]);
  });

  it('is compared to a guess having two exact matches and two non positional matches', function () {
    expect(simpleSecret.compare('cbad')).toEqual([ 2, 2 ]);
  });

  it('is compared to a guess having three exact matches and one duplicated non scoring', function () {
    expect(simpleSecret.compare('abad')).toEqual([ 3, 0 ]);
  });
});

describe('A secret code having two duplicates', function () {
  beforeEach(function() {
    twoDuplicatesSecret = new Secret('baab');
  });

  it('is compared to a guess having two pairs of duplicates all being non positional', function () {
    expect(twoDuplicatesSecret.compare('abba')).toEqual([ 0, 4 ]);
  });

  it('is compared to a guess having duplicates. One duplicate being positional match', function () {
    expect(twoDuplicatesSecret.compare('xaax')).toEqual([ 2, 0 ]);
  });
});
