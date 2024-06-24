let massJohn = 101;
const heightJohn = 1.77;
let massMark = 90;
const heightMark = 1.70;

let BMIJohn = parseInt(massJohn / (heightJohn * heightJohn));
let BMIMark = parseInt(massMark / (heightMark * heightMark));
console.log(`BMI Mark = ${BMIMark}, BMI John = ${BMIJohn}`);

if (BMIJohn > BMIMark) {
    console.log(`John's BMI ${BMIJohn} is higher than Mark's ${BMIMark}!`)
} else if (BMIJohn === BMIMark) {
    console.log(`John and Mark have the BMI equal!`)
} else {
    console.log(`Mark's ${BMIMark} BMI is higher than John's ${BMIJohn}!`)
}