//Double Char
//Given a string, you have to return a string in which each character is repeated once.
function doubleChar(str) {
  return (
    // split the string into individual char array
    str.split('').map(function (c) {
      // iterate and update
      return c + c;
      // join the updated array
    }).join('')
  );
}

//Reversed sequence
/* Get the number n (n>0) to return the reversed sequence from n to 1.
Example : n=5 >> [5,4,3,2,1] */
const reverseSeq = n => {
  let arr = [];
  for (let i = n; i > 0; i--) {
    arr.push(i);
  }
  return arr;
};