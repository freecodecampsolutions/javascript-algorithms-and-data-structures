const values = {
  'PENNY': 1,
  'NICKEL': 5,
  'DIME': 10,
  'QUARTER': 25,
  'ONE': 100,
  'FIVE': 500,
  'TEN': 1000,
  'TWENTY': 2000,
  'ONE HUNDRED': 10000,
}
function checkCashRegister(price, cash, cid) {
  const convertCidtoPennies = cid => cid.map(tuple => [tuple[0], Math.round(tuple[1]*100)]);
  console.log(convertCidtoPennies(cid))
  let reserves = convertCidtoPennies(cid);
  const diff = 100*(cash - price);
  let status = "OPEN";
  if (diff < 0) return { status, change: [] };
  let owe = diff;
  const len = reserves.length;
  let change = [];
  for (let i=len-1; i>=0; i--) {
    const denomination = reserves[i][0];
    console.log(`############################## trying ${denomination}`)
    console.log(`we owe ${owe} pennies`);
    const amount = reserves[i][1];
    const q = Math.floor(owe/(values[denomination]));
    if (q !== 0) {
      let transfer = q*values[denomination];
      if (transfer > amount) transfer = amount;
      console.log(`we can do ${q} notes ie. ${transfer} pennies`)
      console.log(transfer <= amount)
      if (owe > 0) {
        console.log(`!! hit for ${denomination}`);
        console.log(`transferring ${transfer}`);
        owe -= transfer;
        console.log(`we now owe ${owe} pennies`);
        reserves[i][1] -= transfer;
        console.log(`Reserves: ${reserves}`);
        change.push([denomination, transfer/100]);
      } 
    } else {
      change.push([denomination, 0]);
    }
  }
  if (owe > 0) return {status: "INSUFFICIENT_FUNDS", change: [] };
  if (owe === 0) {
    const sum = reserves.map(tuple => tuple[1]).reduce((sum, x) => sum + x, 0);
    const status = sum === 0 ? 'CLOSED' : 'OPEN';
    change = sum === 0 ? change.reverse() : change.filter(tuple => tuple[1] !== 0);
    return { status, change };
  }
}

console.log(checkCashRegister(19.5, 20, [
    ["PENNY", 0.5],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
]));