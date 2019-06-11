//A square of squares
/*Given an integral number, determine if it's a square number */
var isSquare = function (n) {
  //using Math.sqrt
  return Math.sqrt(n) % 1 === 0;
}

//extract the domain name from an url
function domainName(url) {
  return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];
}
//or
function domainName(url) {
  return url.replace(/(https?:\/\/)?(www\.)?/, '').split('.')[0]
}
//or
function domainName(url) {
  return url.replace(/.+\/\/|www.|\..+/g, '')
}