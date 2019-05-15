//Descending Order
/*Your task is to make a function that can take any non-negative integer as a argument and return it with its digits in descending order.
 */
function descendingOrder(n) {
  let newN = n.toString().split('').sort(function (a, b) {
    return b - a;
  }).join('');
  //transform string newN to an integer using + operator
  return +newN;
}
//or without using a variable to store newN
function descendingOrder(n) {
  return +n.toString().split('').sort().reverse().join('');
}
//or
function descendingOrder(n) {
  return parseInt(String(n).split('').sort().reverse().join(''))
}