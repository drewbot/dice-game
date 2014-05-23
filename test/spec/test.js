describe('rolldice', function(){

  var dicesides = '6';

  it('should have six sides', function(){

    var answer = rolldice(6);
    expect(answer).to.equal(dicesides);
  })
});

//This test is testing to make sure that the dice have six sides, if they in fact have six sides//
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////



describe('rollbutton', function(){

  var buttonfunction = true;

  it('should roll the dice when the button is clicked', function(){

    var answer = rollbutton(true);
    expect(answer).to.be(buttonfuction);
  })
});


//This test is testing to make sure that the roll button makes the dice roll when clicked//
////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////

describe('activaterandom', function(){

  var mixitup = true;

  it('should activate the random number generator when the roll button is clicked', function(){

    var answer = activaterandom(true);
    expect(answer).to.be(mixitup);
  })
});

//This test is testing to make sure the "roll" click buttom activated the random number generator
/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////



describe('snakeeyes', function(){

  var doubleones = ('You Rolled Snake Eyes! Roll Again!');

  it('should display a free turn dialogue is snake eyes are rolled', function(){

    var answer = snakeeyes(1, 1);
    expect(answer).to.include(doubleones);
  })
});

//This test is testing to make sure that a roll of snakeeyes will result in a html dialogue and a free turn//
////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

describe('rolldoubles', function(){

  var doubles = ('You Rolled Doubles! Double Points Awarded');

  it('should display a double points dialogue for rolling doubles', function(){

    var answer = rolldoubles('');
    expect(answer).to.include(doubles);
  })
});

//This test is testing to make sure that a roll of doubles will result in a html dialogue and double points//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

describe('threeofakind', function(){

  var triples = ('Your Rolled Triples! Triple Points Awarded');

  it('should display a triple points dialogue for rolling triples', function(){

    var answer = threeofakind('');
    expect(answer).to.include(triples);
  })
});

//This test is testing to make sure that a roll of triples will result in a html dialogue and triple points//
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

describe('choosedie', function(){

  var selectdie = (true);

  it('should select the associated die when clicked', function(){

    var answer = choosedie(true);
    expect(answer).to.satisfy(selectdie);
  })
});

//This test is test to make sure that when clicked, the associated die will be selected//
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

describe('changeonlyone', function(){

  var oneaction = (true);

  it('should not affect other die when clicked and only have affect on itself', function(){

    var answer = changeonlyone(true);
    expect(answer).to.satisfy(oneaction);
  })
});

//This test is to test and make sure that the click function on a die has no affect on other die or elements//
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

describe('randominator', function(){

  var nosequence = ('');

  it('should pass the associated number through the random number generator', function(){

    var answer = randominator('');
    expect(answer).to.be(nosequence);
  })
});

//This test is checking to make sure that the associated number is passed through the random number generator//
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

describe('wholenumber', function(){

  var mustbewhole = (true);

  it('should always return a whole number when the dice are rolled', function(){

    var answer = wholenumber(true);
    expect(answer).to.be(mustbewhole);
  })
});

//This test is checking to make sure that the random number is always a whole number//
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


describe('positiveonly', function(){

  var positive = (true);

  it('should always return a positive number when the dice are rolled', function(){

    var answer = positiveonly(true);
    expect(answer).to.be(positive);
  })
});






