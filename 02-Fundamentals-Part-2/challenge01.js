'use strict';

const calcAverage = (a, b, c) => (a + b + c) / 3;

const scoreDolphins = calcAverage(85, 54, 41);
const scoreKoalas = calcAverage(23, 34, 27);

const checkWinner = function(avgDolphins, avgKoalas) {
    if (avgDolphins >= (avgKoalas * 2)) {
        console.log(`Dophins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= (avgDolphins * 2)) {
        console.log(`Koala win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log('No team wins...');
    }
};

checkWinner(scoreDolphins, scoreKoalas);