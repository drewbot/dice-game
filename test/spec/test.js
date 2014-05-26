/* global describe, it */
 
(function () {
    'use strict';
 
    describe("Fizz Buzz", function(){
 
      var fifteenFizzBuzz = "1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz";
      var negativeFizzBuzz = "Fizz -2 -1 0 1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz";
 
      it("should correctly implement Fizz Buzz", function(){
        var answer = fizzBuzz(15);
        expect(answer).to.equal(fifteenFizzBuzz);
      });
 
      describe("handles multiples", function(){
        it("should turn multiples of 3 into Fizz", function(){
          expect(fizzBuzz(3,3)).to.equal("Fizz");
          expect(fizzBuzz(6,6)).to.equal("Fizz");
          expect(fizzBuzz(33333333,33333333)).to.equal("Fizz");
        });
 
        it("should turn multiples of 5 into Buzz", function(){
          expect(fizzBuzz(5,5)).to.equal("Buzz");
          expect(fizzBuzz(10,10)).to.equal("Buzz");
          expect(fizzBuzz(1000000,1000000)).to.equal("Buzz");
        });
 
        it("should turn multiples of 3 and 5 into FizzBuzz", function(){
          expect(fizzBuzz(15,15)).to.equal("FizzBuzz");
          expect(fizzBuzz(30,30)).to.equal("FizzBuzz");
          expect(fizzBuzz(45,45)).to.equal("FizzBuzz");
        }) 
      })
 
      describe("accepts arguments", function(){
        it("should return fizzBuzz(1,100) when no args are provided", function(){
          expect(fizzBuzz()).to.equal(fizzBuzz(1,100));
        });
 
        it("should treat the first arg as the limit if no second arg is provided", function(){
          expect(fizzBuzz(200)).to.equal(fizzBuzz(1,200));
        });
 
        it("should work fine with negative arguments", function(){
          expect(fizzBuzz(-3,15)).to.equal(negativeFizzBuzz);
        });
      });
    });
 
 
    describe("Create Die Button", function(){
 
      // set input vaue to 7
      $('.die-sides').val('7');
      // then click the button
      $('.create-die').click();
 
      it("should create a die and store it in the gameDie global", function(){        
        expect(gameDie.sides).to.equal(7);
      });
 
      it("should create a die with sides equal the input value", function(){
        var inputVal = parseInt($('.die-sides').val())
        expect(gameDie.sides).to.equal(inputVal);
      });
 
    });
 
    describe("Die Constructor", function(){
 
      it("should impart a sides property to instances", function(){
        var die = new Die(900);
        expect(die).to.have.property('sides');
      });
 
      it("should accept a number or a number as a string as its argument", function(){
        var die = new Die('7');
        expect(die.sides).to.equal(7);
      })
 
      describe("imparts a roll function", function() {
        it("that returns between its min and max values", function(){
          var die = new Die('7');
 
          for (var i = 0; i < 1000; i += 1) {
            expect(die.roll()).to.be.within(1,7);
          }
        })
      })
 
    })
})();



/* global describe, it */
// (function () {
//     'use strict';

//     describe('Give it some context', function () {
//         describe('maybe a bit more context here', function () {
//             it('should run here few assertions', function () {
//               var answer = 2;
//               expect(2).to.equal(answer);
//             });
//         });
//     });
// })();



// /* global describe, it */
// 'use strict';
 
// describe("Six Sided Die", function(){
// 	$(".die-sides").val("6");
// });
// 	it("should create a 6 sided die and store it globally", function(){
// 	expect(gameDie.sides).to.equal(6);
// });



// describe("Three Sided Dice", function(){
// 	$(".dice-sides").val("3");
// });
// 	it("should create  a 3 sided die and store it globally", function(){
// 	expect(gameDie.sides).to.equal(3);
// });



// describe("Input test", function(){
// 	$(".dice-sides.input").val(6);
// });
// 	it("should test numerical input use", function(){
// 	expect(gameDie.sides.val).to.equal.typeof(6);
// });