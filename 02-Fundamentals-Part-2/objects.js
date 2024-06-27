/*
A diferença entre array e objects é que os objects a ordem do seu valor não importa quando queremos pegar buscar eles pois apenas colocamos a palavra chave pegamos esse valor, ja os arrays eles são indexados ordenamente. 
*/

const augusto = {
    firstName: 'Augusto',
    lastName: 'Castilho',
    age: 19,
    job: 'Developer',
    friends: [
        'Pedro',
        'Lucas',
        'Enzo',
        'Gabriel'
    ]
};

console.log(augusto);

// Primeira maneira de obter um item do obj é com a Bracket Notation 
console.log(augusto.lastName);
console.log(augusto['lastName']); 

const nameKey = 'Name';
console.log(augusto['first' + nameKey]); // Quando contatenamos o First com a variavel que tem como valor a string Name, então ele vai ler primeiro e vai buscar no nosso objeto esse valor novo

/*
Quando usar a DOT ou a Bracket?
- Use sempre a Dot Notation
*/

const interestedIn = prompt('What do you want to know about Augusto? Choose between firstName, lastName, age, job and friends');

if (augusto[interestedIn]) {
    console.log(augusto[interestedIn]);
} else {
    console.log('Wrong request!');
}

/**===============================================================*/

// Para adicionar novas propriedades ao objeto 
augusto.location = 'Brasil'; 
augusto['instagram'] = '@augustocastilho_';
console.log(augusto);

// Challenge 
console.log(`${augusto.firstName} has ${augusto.friends.length} friends, and his best friend is called ${augusto.friends[0]}`);
/*========================================================*/
 
/*
O . é um operador de mais alto nivel, e ele realiza em left-to-right, por isso que o exemplo acima funciona os colchetes vem logo depois.  
*/




