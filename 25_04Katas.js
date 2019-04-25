//Sum of positive
function positiveSum(numbers) {
  var negatives = [];
  var sum = 0;

  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
      negatives.push(numbers[i]);
    } else {
      sum += numbers[i];
    }
  }
  return sum;
}

//Opposite number
function opposite(number) {
  return (-number)
}

//Delete first and last character of a string
function deleteFirstAndLast(str) {
  return str.slice(1, -1);
}

//Return Negative
function makeNegative(num) {
  if (Math.sign(num) === -1) {
    return num;
  } else {
    return num = -num;
  }
}

//Find the smallest integer in the array
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
  }
}

//Remove string spaces
function noSpace(str) {
  return str.replace(/\s/g, '');
}

//Counting the number of sheep present in an array (true means present).
function countSheeps(arrayOfSheep) {
  return (arrayOfSheep.filter(Boolean).length);
}

//Basic Mathematical Operations: The function should return result of numbers after applying the chosen operation.
function basicOp(operation, value1, value2) {
  return eval(value1 + operation + value2);
}