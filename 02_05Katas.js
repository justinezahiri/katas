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