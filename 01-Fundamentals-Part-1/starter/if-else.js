const age = 7; 
 
if(age >= 18) {
    console.log('Pode dirigir');
} else {
    const yearsLeft = 18 - age;
    console.log(`Falta ${yearsLeft} anos para você tirar carteira`)
}

const birthYear = 2005;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21; 
}

console.log(century)