module.exports = function reverse (n) {
  let result ='';
  let abs = Math.abs(n);
  let str = abs.toString();
  for (let i=0; i < str.length; i += 1) {
    result = `${str[i]}${result}`;
  }
  return +result;
}


