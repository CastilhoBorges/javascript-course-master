/*

Dolphins => 96,108 e 89
Koalas => 88,91 e 110

*/

function average(a, b, c) {
    return (a + b + c) / 3 
}

const scoreDolphins = average(96, 108, 89);
const scoreKoalas = average(88, 91, 110);

if (scoreDolphins > scoreKoalas) {
    console.log('Dolphins win the trophy');
} else if (scoreKoalas > scoreDolphins) {
    console.log('Koalas win the trophy');
} else {
    console.log('Both win the trophy');
}