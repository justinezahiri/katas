//REMOVE DUPLICATES
function removeDuplicates(array) {
  //initaliser un array vide
  let sortedArray = [];
  for (var i = 0; i < array.length; i++) {
    //vérifier si l'élément est déjà dans le tableau sortedArray
    if (!sortedArray.includes(array[i])) {
      //si l'élément n'est pas dans le tableau sortedArray, je l'ajoute. 
      sortedArray.push(array[i]);
    }
  }
  //retourne le tableau des éléments ajoutés
  return sortedArray;
}