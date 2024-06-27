'use strict';
/*
Vamos supor que eu quero guardar o nome dos meus amigos em algum lugar, com os conhecimentos adquidiros ate aqui ficaria dessa forma...
*/
const friend1 = 'Pedro';
const friend2 = 'Lucas';
const friend3 = 'Enzo'; 
/*
Não vai ser legal ficar declarando variavel para todos ne, por isso que existe a estrutura de dados que chamamos de arrays, nada mais é que um container gigante para guadarmos nossas informações, em Js tambem veremos mais para frente os objetos. 
*/
const friends = ['Pedro', 'Lucas', 'Enzo']; // Literal Sintax
console.log(friends);

const years = new Array(2006, 2007, 2005); // Outro modo de declarar a array
console.log(years);

// Modo para exibir algum elemento da array no console
console.log(friends[0]); // Pedro
console.log(friends[2]); // Enzo

// ver quantos elementos temos na array
console.log(friends.length); // 3

// Podemos dentro dos colchetes de chamar o elemento da array colocar expressões
console.log(friends[friends.length - 1]); // Enzo 
// Lembre que expressões é algo que produz valor. 

// Para alterar o valor do elemento basta...
friends[2] = 'Matheus';
console.log(friends);
// Apenas valores primitivos que são imutaveis 
// Dentro do array podemos inserir todos os tipos de dados 

// Exercicio 
const calcAge2 = function(birthDay) {
    return 2024 - birthDay
};

const years1 = [2012, 2005, 1978, 1850, 3069];

console.log(calcAge2(years1[0]));

// podemos colocar as funções como valo do elemento
const ages = [calcAge2(years1[2]), calcAge2(years1[3])];
console.log(ages);

/*===================================================*/

// Basic Array Operations 

// Push, adiciona elementos ao final de um array
const friendsMy = ['Pedro', 'Lucas', 'Enzo'];
friendsMy.push('Gabriel');
console.log(friendsMy); 

// Unshift serve para adicionar ao inicio da array
friendsMy.unshift('Matheus');
console.log(friendsMy);

// Pop remove o ultimo elemento
friendsMy.pop(); // Aqui ele removeu o Gabriel
friendsMy.pop(); // Aqui o Enzo 
console.log(friendsMy);

// O shift pega o primeiro elemento do array 
friendsMy.shift();
console.log(friendsMy);

// Metodo para mostra em que posição o elemento que queremos esta é o IndexOf
console.log(friendsMy.indexOf('Pedro'));

// O includes serve para saber se o nome esta ou não na array, ele retorna true or false
console.log(friendsMy.includes('Pedro')); // true 
// Podemos usar em condicionais 

if (friendsMy.includes('Pedro')) {
    console.log('He`s here!');
}