describe('rolldice', function(){

  var dicesides = '1 2 3 4 5 6';

  it('should have six sides', function(){

    var answer = rolldice(6);
    expect(answer).to.equal(dicesides);
  })
});

//This test is testing to make sure that the dice have six sides, if they in fact have six sides//

describe('rollbutton', function(){

  var buttonfunction = true;

  it('should roll the dice when the button is clicked', function(){

    var answer = rollbutton(true);
    expect(answer).to.be(buttonfuction);
  })
});

//This test is testing to make sure that the roll button makes the dice roll when clicked//

describe('snakeeyes', function(){

  var doubleones = ('You Rolled Snake Eyes! Roll Again!');

  it('should display a free turn dialogue is snake eyes are rolled', function(){

    var answer = snakeeyes(1, 1);
    expect(answer).to.include(doubleones);
  })
};

//This test is testing to make sure that a roll of snakeeyes will result in a html dialogue and a free turn//

describe('rolldoubles', function(){

  var doubles = ('You Rolled Doubles! Double Points Awarded');

  it('should display a double points dialogue for rolling doubles', function(){

    var answer = rolldoubles('');
    expect(answer).to.include(doubles);
  })
});

//This test is testing to make sure that a roll of doubles will result in a html dialogue and double points//

describe('threeofakind', function(){

  var triples = ('Your Rolled Triples! Triple Points Awarded');

  it('should display a triple points dialogue for rolling triples', function(){

    var answer = threeofakind('');
    expect(answer).to.include(triples);
  })
});
