// Type conversion
const inputYear = '2005';
console.log(Number(inputYear) + 18) // String to Number 
console.log(String(55)) // Number to String 

// Type coercion 
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 5); // O - converte os numeros automaticamente 
console.log('23' * '5'); // O op de divisão e multiplicação so funcionan com numeros então o js converte auto. 

let n = '1' + 1; // '11' (String)
n = n - 1;  // 11 (Number)
console.log(n);
