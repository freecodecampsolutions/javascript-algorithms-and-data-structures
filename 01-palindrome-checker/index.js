// use this to reverse a string
const reverseStr = str => str.split('').reverse().join('');

function palindrome(str) {
  // remove all spl characters
  let str_alphanum = str.toLowerCase().replace(/[^0-9a-z]/gi, '').replace(/[ ]*/g, '');
  // split the strings
  const len = str_alphanum.length;
  // get 2 parts of the string
  let firstHalf, secondHalf;
  const mid = len/2;
  if (len % 2 === 0) {
    firstHalf = str_alphanum.substring(0, mid);
    secondHalf = str_alphanum.substring(mid);
  } else {
    firstHalf = str_alphanum.substring(0, mid - 0.5);
    secondHalf = str_alphanum.substring(mid + 0.5);
  }
  return firstHalf === reverseStr(secondHalf);
}

palindrome("eye");

