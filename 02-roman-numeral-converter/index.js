const romtodec = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000,
}
const order = ['M', 'D', 'C', 'L', 'X', 'V', 'I'];

const quotientsToNumber = quots => quots.map((quot, i) => quot < 0 ? order[i].toLowerCase() : order[i].repeat(quot)).join('');

const arr_swap = (arr, i, j) => {
  [arr[i], arr[j]] = [arr[j], arr[i]];
  return arr;
};
const adjust_pre = (quots) => {
  for (let i=6; i >= 0; i-=2) {
    if (quots[i] === 4) {
      // set it to -1
      quots[i] = -1;
      // increase the next one
      quots[i-1]++;
    }
  }
  return quots
}

const adjust_post = (str) => {
  for (let i=5; i >= 0; i-=2) {
    const c = order[i];
    str = str.replace(c.repeat(2), order[i-1])
  }
  let str_arr = str.split('');
  for (let i=6; i >= 0; i-=2) {
    const c = order[i].toLowerCase();
    const idx = str_arr.indexOf(c)
    if (idx !== -1) {
      str_arr[idx] = str_arr[idx-1];
      str_arr[idx-1] = order[i];
    }
  }
  return str_arr.join('');
}

function convertToRoman(num) {
  let curr_num = num;
  let quotients = [];
  for (const numeral of order) {
    const divisor = romtodec[numeral];
    quotients.push(Math.floor(curr_num/divisor));
    curr_num = curr_num % divisor;
  }
  console.log(quotients)
  const ans = adjust_post(quotientsToNumber(adjust_pre(quotients)))
  console.log(ans)
  return ans;
}

convertToRoman(9);