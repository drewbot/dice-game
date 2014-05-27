//Store a function as a variable which will generate a number between one and x
//x to be specified in future use of the function
var rollDice = function(x) {
  var randomNumber = Math.floor(Math.random() * x + 1);
  $('.face-single').text(randomNumber);
  console.log(randomNumber);
  return randomNumber
}

//When this button is clicked a random number will be generated and appended to the face-single div

$('.button-single').click(function(){
  rollDice(100);
  $('.cub-1').toggleClass('roller-spin');
});
  
// Two at a time

var rollDiceDouble = function(x) {
  var randomNumber = Math.floor(Math.random() * x + 1);
  $('.face-double1').text(randomNumber);
  console.log(randomNumber);
}


var rollDiceDouble2 = function(x) {
  var randomNumber = Math.floor(Math.random() * x + 1);
  $('.face-double2').text(randomNumber);
  console.log(randomNumber);
}

$('.button-double').click(function(){
  rollDiceDouble(6);
  rollDiceDouble2(6);
  $('.cub-1').toggleClass('roller-spin');
});


//Choose number of sides

function Die (sides) {
  this.sides = parseInt(sides);
 
  this.roll = function(){
    var result = Math.floor(Math.random() * this.sides + 1 );
    console.log('rolled 1d'+ this.sides, " for ", result);
    return result;
  }
}
 
$('.create-die').click(function(){
  var sides = $('.die-sides').val();
  gameDie = new Die(sides);
})

$('.button-any').click(function(){
  $('.face-any').text(gameDie.roll());
  $('.cub-1').toggleClass('roller-spin');
});
