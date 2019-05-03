//Square(n) Sum
//Complete the square sum method so that it squares each number passed into it and then sums the results together.
function squareSum(numbers) {
  return numbers.reduce(function (sum, n) {
    return (n * n) + sum;
  }, 0)
}