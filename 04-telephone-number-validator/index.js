const getNums = n => `[0-9]{${n}}`;
const getSyms = (exp, b = false) => {
  const prefix = `\\(${exp}\\)| \\(${exp}\\) |`;
  return `(${b ? prefix : ''}[ -]{0,1}${exp}[ -]{0,1}){1}`;
};
const getSection = (n, b=false) => getSyms(getNums(n), b);
const regex = new RegExp(`^[1]{0,1}${getSection(3, true)}${getSection(3)}${getSection(4)}$`, 'gi');

function telephoneCheck(str) {
  return str.match(regex) !== null;
}

console.log(telephoneCheck("555-555-5555"));