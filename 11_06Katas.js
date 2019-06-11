//A square of squares
/*Given an integral number, determine if it's a square number */
var isSquare = function (n) {
  //using Math.sqrt
  return Math.sqrt(n) % 1 === 0;
}