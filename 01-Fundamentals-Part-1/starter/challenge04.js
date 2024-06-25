const bill = 275;
const bill15 =  bill * (15 / 100);
const bill20 = bill * (20/100);

const tip = bill >= 50 && bill <= 300 ? bill15 : bill20; 

console.log(`${bill}, ${tip}, ${bill + tip}`);

