/*
Assim como as condicionais, eles são estruturas de controles, vamos ver primeiro o loop for
*/

// for loop keeps running while condiiton is TRUE 
for (let rep = 1; rep <= 20; rep++) {
    console.log(`Lifting weights repetiiton ${rep}🏋️‍♂️`);
}
////////////////////////////////////////////////
for (let n = 6, valor = 1, resultado = 1; valor <= n; resultado = resultado * n, valor++) {
    console.log(`${resultado}`);
} 
////////////////////////////////////////////////
// Looping Arrays 
const augusto = [
    'Augusto',
    'Castilho',
    ['Pedro', 'Enzo'],
    'Developer',
    2005
];

const types = [];

for (let i = 0; i < augusto.length; i++) {
    // Reading augusto array 
    console.log(augusto[i], typeof augusto[i]);

    // Filling tipes array 
    //types[i] = typeof augusto[i];

    types.push(typeof augusto[i])
}

console.log(types)

// Other filling
const years = [2005, 1995, 2055, 1956];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2024 - years[i]);
}
console.log(ages);

// Continue
console.log('---- Only String ----')
for (let i = 0; i < augusto.length; i++) {
    if(typeof augusto[i] !== 'string') continue;

    // Reading augusto array 
    console.log(augusto[i], typeof augusto[i]);
}

// Break encerra o loop 
console.log('--Break with Number--')
for (let i = 0; i < augusto.length; i++) {
    if(typeof augusto[i] === 'number') break;

    // Reading augusto array 
    console.log(augusto[i]);
}