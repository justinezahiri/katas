//Remove First and Last Character
function array(arr) {
  //check if arr is 2 elemnts or less
  if (arr.length < 2) {
    return null;
    //remove first and last elements
  } else {
    return arr.split(",").slice(1, -1).join(" ");
  }
}