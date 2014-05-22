describe('rolldice', function(){

  var dicesides = '1 2 3 4 5 6';

  it('should have six sides', function(){

    var answer = rolldice(6);
    expect(answer).to.equal(dicesides);
  })
})

