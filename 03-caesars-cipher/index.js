const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const shift = (char, len) => char.match(/[A-Z]/g) !== null ? alphabets[(alphabets.indexOf(char) - len + 26) % 26] : char;
const rot13 = (str, offset = 13) => str.split('').map(c => shift(c, offset)).join('');

console.log(rot13("SERR PBQR PNZC"));