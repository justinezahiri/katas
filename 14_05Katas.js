//find the longest word in a string
function findLongestWord(str) {
  var longest = str.split(' ').reduce((longestWord, currentWord) => {
    return currentWord.length > longestWord.length ? currentWord : longestWord;
  }, "");
  return longest;
}

//find the shortest word in a string (return the length of the shortest word)
function findShort(str) {
  var words = str.split(' ');
  var shortest = words.reduce((shortestWord, currentWord) => {
    return currentWord.length < shortestWord.length ? currentWord : shortestWord;
  }, words[0]);
  return shortest.length;
}
//or using Math.min.apply()
function findShort(s) {
  return Math.min.apply(null, s.split(' ').map(w => w.length));
}
//or using for loop
function findShort(s) {
  var arr = s.split(' ');
  var smallest = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length < smallest.length) {
      smallest = arr[i];
    }
  }
  return smallest.length;
}