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
  if (input == null || input.length == 0)
    return [];

  var positive = 0;
  var negative = 0;

  for (var i = 0, l = input.length; i < l; ++i) {
    if (input[i] > 0)
      ++positive;
    else
      negative += input[i];
  }

  return [positive, negative];
}
//or
function countPositivesSumNegatives(input) {
  var newArr = [];
  var positiveNumber = 0;
  var negativeNumber = 0;

  // Validate Input
  if (input === null || input.length === 0)
    return newArr;

  // Loop through array of Numbers 
  for (var i = 0; i < input.length; i++) {
    if (input[i] == 0)
      continue;

    // Count positives
    else if (input[i] > 0)
      positiveNumber++;

    // Sum negatives
    else if (input[i] < 0)
      negativeNumber += input[i];

  }

  // Prepare Output
  newArr.push(positiveNumber);
  newArr.push(negativeNumber);

  return newArr;
}