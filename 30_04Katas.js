//Sum without highest and lowest number
function sumArray(array) {
  //retourner 0 si array null ou undefined ou de longueur inférieure à 0
  if (array === null || undefined || array.length < 0) {
    return 0
  } else {
    //initialiser sum
    var sum = 0;
    //trier l'array par ordre croissant (array.sort renvoyant un array)
    array.sort(function (a, b) {
      return a - b
    });
    //array.length - 1 car les arrays sont index 0 based 
    for (var i = 1; i < array.length - 1; i++) {
      sum += array[i];
    }
    return sum;
  }
}

// Sum without highest and lowest number (not sorting)
let arr = [6, 2, 1, 8, 10];
const max = arr.reduce(function (a, b) {
  return Math.max(a, b);
})
const min = arr.reduce(function (a, b) {
  return Math.min(a, b);
})
let sum = arr.reduce(function (a, b) {
  return a + b;
}, 0); // add 
sum -= (min + max);
console.log(sum)

//Convert a Number to a String
//using toString()
function numberToString(num) {
  return num.toString()
}
//using n + ""
function numberToString(num) {
  return num + "";
}

//Keep Hydrated: N. drinks 0.5 litres of water per hour of cycling. You get given the time in hours and you need to return the number of litres N will drink, rounded to the smallest value.
function litres(time) {
  //on utilise Math.floor pour arrondir (renvoie le plus grand entier qui est inférieur ou égal à un nombre )
  return Math.floor(time * 0.5);
}