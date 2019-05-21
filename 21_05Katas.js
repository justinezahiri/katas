//Find the odd int
//Given an array, find the int that appears an odd number of times.
function findOdd(numbers) {
  var count = 0;
  // Start looking the array
  for (var i = 0; i < numbers.length; i++) {
    // Start looking the array again for the number to look for
    for (var j = 0; j < numbers.length; j++) {
      // If the current number is the same as the one that we are looking for, sum it up
      if (numbers[i] == numbers[j]) {
        count++;
      }
    }
    // Then, if currently there are an odd number of elements, save the number
    if (count % 2 != 0) {
      return numbers[i];
    }
  }
  return 0;
}