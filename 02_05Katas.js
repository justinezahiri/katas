//Calculate average
function find_average(array) {
  //dans une boucle for, intialiser l'index et la sum à O
  for (var i = 0, sum = 0; i < array.length; i++) {
    //additionner tous les nombres de l'array
    sum += array[i];
  }
  //calculer la moyenne 
  return sum / i;
  //si pas de passage dans la boucle, retourner 0. 
  return 0;
}

//Is n divisible by x and y?
//Create a function isDivisible(n, x, y) that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.
function isDivisible(n, x, y) {
  //j'utilise le modulo % pour vérifier si n est divisible par x et y 
  if (n % x === 0 && n % y === 0) {
    return true;
  }
  return false;
}

//Invert values
function invert(array) {
  var newArr = [];
  for (var i = 0; i < array.length; i++) {
    newArr.push(-array[i]);
  }
  return newArr;
}
//or
function invert(array) {
  return array.map(i => 0 - i);
}