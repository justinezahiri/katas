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