function findNeedle(haystack) {
  return "found the needle at position " + haystack.indexOf("needle");
}
//or
function findNeedle(haystack) {
  return `found the needle at position ${haystack.indexOf('needle')}`;
}
//or
function findNeedle(haystack) {
  var i = 0;
  while (i < haystack.length) {
    if (haystack[i] == 'needle') {
      return 'found the needle at position ' + i;
    }
    i++;
  }
}