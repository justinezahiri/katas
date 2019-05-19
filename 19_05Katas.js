//square every digit of a number
//For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
function squareDigits(num) {
  return Number(('' + num).split('').map(function (val) {
    return val * val;
  }).join(''));
}
//or
function squareDigits(num) {
  var array = num.toString().split('').map(function (int) {
    var i = parseInt(int);
    return i * i;
  });

  return parseInt(array.join(""));
}

//Multiples of 3 or 5
/*If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
Note: If the number is a multiple of both 3 and 5, only count it once. */
function solution(number) {
  var sum = 0;

  for (var i = 1; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i
    }
  }
  return sum;
}