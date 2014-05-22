describe('rolldice', function(){

  it('should roll a number between 1 and 6', function(){

    var rolldice = function(){
      diceface('6')
    };

    expect(rolldice).to.be.equal(6);
  })
}); 

describe('dicebutton', function(){

  it('should roll dice when clicked', function(){

    var dicebutton = function(){
      buttonactivate('')
    }
  })
})