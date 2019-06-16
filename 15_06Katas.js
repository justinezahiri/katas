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

//Count of positives / sum of negatives
/*
Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.
If the input array is empty or null, return an empty array.
*/
function countPositivesSumNegatives(input) {
  if (input === [] || null) {
    return [];
  }
  //iterate over input array
  input.map
  //create an array to push count of positive numbers
  //create an array to push sum of negative numbers
  //test if array element is a positive number 
  //test if array element is a negative number
  return ?;
}