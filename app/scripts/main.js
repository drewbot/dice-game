function fizzBuzz(first,last){
  var start, stop, string = '';
 
  if (last) {
    // we do a for loop from first to last
    start = first;
    stop = last;
  } else if (first) {
    // we do a for loop from 1 to first
    start = 1;
    stop = first;
  } else {
    // we do a for loop from 1 to 100
    start = 1;
    stop = 100;
  }
 
  for (var i = start; i <= stop; i += 1) {
    if (i == 0) {
      string += '0 ';
    } else if (i % 3 == 0 && i % 5 == 0) {
      string += 'FizzBuzz '; 
    } else if (i % 3 == 0) {
      string += 'Fizz ';
    } else if (i % 5 == 0) {
      string += 'Buzz ';
    } else {
      string += i + ' ';
    }
  }
 
  return string.slice(0,-1);
    
}
 
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




