// Exercícios para Praticar o Loop for em JavaScript
/*
1 - Crie um loop for que imprima os números de 1 a 10 no console.
2 - Modifique o loop para imprimir os números de 10 a 1 em ordem decrescente.
3 - Imprima apenas os números pares de 1 a 20.
4 - Imprima os números ímpares de 19 a 100 (inclusive).
*/

// 1 
console.log('===== EXERCICIO 1 =====');
for (let n = 1; n <= 10; n++) {
    console.log(n);
}

// 2 
console.log('===== EXERCICIO 2 =====');
for (let n2 = 10; n2 >= 1; n2--){
    console.log(n2);
}

// 3
console.log('===== EXERCICIO 3 =====');
for (let pares = 0; pares <= 20; pares = pares + 2) {
    console.log(pares);
}

// 4 
console.log('===== EXERCICIO 4 =====');
for (let impar = 19; impar <= 100; impar = impar + 2) {
    console.log(impar);
}

/*
5 - Crie um loop for que imprima a tabuada de um número escolhido pelo usuário (de 1 a 10).
6 - A tabuada deve mostrar a multiplicação do número por cada valor de 1 a 10.
Exemplo: Tabuada do 5: 5 x 1 = 5, 5 x 2 = 10, 5 x 3 = 15, etc.
*/

// 5
console.log('===== EXERCICIO 5 =====');

let number = prompt('Digite um numero de 1 a 10: ');

for (let i = 1; i <= 10; i++) {
    const result = number * i;
    console.log(`Tabuada do ${number}:\n${number} x ${i} = ${result}`);
}