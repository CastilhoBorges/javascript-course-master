/*
Assim como as condicionais, eles são estruturas de controles, vamos ver primeiro o loop for
*/


// for loop keeps running while condiiton is TRUE 
/*for (let rep = prompt('Talking a number: '); rep <= 20; rep++) {
    console.log(`Lifting weights repetiiton ${rep}🏋️‍♂️`);
}*/

for (let n = prompt('Talk a Number'), valor = 1, resultado = 1; valor <= n; resultado = resultado * n, valor++) {
    console.log(`${resultado}`);
}