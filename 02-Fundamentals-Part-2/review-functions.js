'use strict';

const calcAge = function(birthYear) {
    return 2024 - birthYear; 
};

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = calcAge(birthYear);
    const retirement = 65 - age; 

    if (age >= 65) {
        return `You are Retired!`
    }

    return `${firstName} retires in ${retirement} years`
};

console.log(yearsUntilRetirement(2005, 'Augusto'));
console.log(yearsUntilRetirement(1978, 'Cintia'));
console.log(yearsUntilRetirement(1958, 'Helanita'));
