const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};  

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

for (let i = 0; i < bills.length; i++) {
    tips[i] = calcTip(bills[i]);
    totals[i] = bills[i] + tips[i];
    console.log(totals[i]);    
}

const calcAverage = function(arr) {
    let sum = 0; 
    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum / arr.length;
}

console.log(calcAverage(totals)); // 275.19
console.log(calcAverage(tips)); // 42.89
console.log(calcAverage(bills)); // 232.3

