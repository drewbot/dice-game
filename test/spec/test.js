/* global describe, it */

(function() {
  'use strict';

  // describe('Give it some context', function () {
  //     describe('maybe a bit more context here', function () {
  //         it('should run here few assertions', function () {
  //           var answer = 2;
  //           expect(2).to.equal(answer);
  //         });
  //     });
  // });



  //Create a die Unit-Tests

  describe("Create Die Button", function() {

    // set input vaue to 7
    $('.die-sides').val('7');
    // then click the button
    $('.create-die').click();

    it("should create a die and store it in the gameDie global", function() {
      expect(gameDie.sides).to.equal(7);
    });

    it("should create a die with sides equal the input value", function() {
      var inputVal = parseInt($('.die-sides').val())
      expect(gameDie.sides).to.equal(inputVal);
    });

  });

  describe("Die Constructor", function() {

    it("should impart a sides property to instances", function() {
      var die = new Die(900);
      expect(die).to.have.property('sides');
    });

    it("should accept a number or a number as a string as its argument", function() {
      var die = new Die('7');
      expect(die.sides).to.equal(7);
    })

    describe("imparts a roll function", function() {
      it("that returns between its min and max values", function() {
        var die = new Die('7');

        for (var i = 0; i < 1000; i += 1) {
          expect(die.roll()).to.be.within(1, 7);
        }
      })
    })

  })


  //100-Sided Die Unit-Tests

  describe("Roll 100-Sided Die Button", function() {

    $('.button-single').click();

    it("should add the returned number to the face-single div", function() {
      expect(parseInt($('.face-single').text())).to.be.within(1, 100);
    });
  });

  describe("rollDice function", function() {

    rollDice(50);

    // it("should run a default value if no arguement is passed")

    it("should return a random number between 1 and 100", function() {
      expect(rollDice(50)).to.be.within(1, 50);
    });

  });


})();