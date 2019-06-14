//Remove First and Last Character
function array(arr) {
  //check if arr is 2 elemnts or less
  if (arr.length < 3) {
    return null;
    //remove first and last elements
  } else {
    return arr.split(",").slice(1, -1).join(" ");
  }
}
//or
function array(arr) {
  //first remove the commas
  arr = arr.split(',');
  //check if arr is less than 3 characters
  if (arr.length < 3) {
    return null;
  }
  //remove first and last element and put '' around arr
  return arr.slice(1, arr.length - 1).join(' ');
}