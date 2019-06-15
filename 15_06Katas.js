//ES6 string addition
/*
ES6 has introduced another way of joining strings. Your task is to find out what this is and write a function that will add two strings together, there must be a space between the two strings.
+ , .concat() & .join() will not be allowed in this exercise. 
*/
function joinStrings(string1, string2) {
  return `${string1} ${string2}`
}
//or
const joinStrings = (string1, string2) => `${string1} ${string2}`;