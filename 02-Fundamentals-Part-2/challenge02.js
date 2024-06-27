
const calcTip = function(bill) {
    return bill >= 50 && bill <= 300 ? bill * (15 / 100) : bill * (20 / 100);
};
console.log(calcTip(100));

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

console.log(tips);

