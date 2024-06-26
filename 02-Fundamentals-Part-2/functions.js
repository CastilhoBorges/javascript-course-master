'use strict';

/*
Funções são blocos do nosso codigo que podemos reutilizar a hora que quisermos
*/

function logger() {
    console.log('My name is Jonas');
}

logger(); // Como essa função não produz nenhum valor não podemos salvar em var. . 

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice; 
}

console.log(fruitProcessor(6, 8)); 

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

/*
As funções nos permitem a escrever codigos limpos sem muitas repetições 
*/

/*==========================================================*/

// Function delarations 
function calcAge(actualDay, actualMonth, actualYear, birthDay, birthMonth, birthYear) {
    if (actualDay === birthDay && actualMonth === birthMonth) {
        return `Today is your birthday, your age now is ${actualYear - birthYear}`
    } else {
        return `Today don't your birthday, you still have ${(actualYear - birthYear) - 1} years`
    }
}  
const age1 = calcAge(26, 6, 2023, 4, 7, 2005);

// Function Expression.
const calcAge2 = function(birthDay) {
    return 2024 - birthDay
}
const age2 = calcAge2(2005);

console.log(age1);
console.log(age2);

/*
Qual a diferença das duas? 
- As Declaradas nos podemos chamar ela de qualquer lugar do codigo, ou seja ate antes da sua declaração. Ja as Expressões so podemos chamar elas depois de declaradas, isso acontece por causa do hoisting no js. 
 ==========================================================
*/

// Arrow Functions 
const calcAge3 = dayBirth => 2024 - dayBirth;
console.log(calcAge3(1992));

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2024 - birthYear;
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} retires in ${retirement}`;
}

console.log(yearsUntilRetirement(1990, 'Augusto'));

/*========================================================*/

// Calling Functions other functions 

function cutFruit(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruit(apples); 
    const orangesPieces = cutFruit(oranges);

    console.log(apples, oranges);
    const juice = `Juice with ${applePieces} pieces of apples and ${orangesPieces} pieces of oranges.`;
    return juice; 
}
console.log(fruitProcessor(5, 6));

/*
Primeiro criamos uma função de cortar as frutas, e dentro da função de processar as frutas nos chamamos essa função e colocamos os parâmetros que será passado quando chamarmos a função de processar e armazenamos ela nas devidas variáveis. Ou seja quando chamarmos a função de processar as frutas colocando os parâmetros ela vai substituir esses valores e quando a função de cortar for chamada ela vai se executar e jogar nas variáveis e depois a string vem e nos da o retorno.  
*/

/*==========================================================*/