const augusto = {
    firstName: 'Augusto',
    lastName: 'Castilho',
    birthYear: 2000,
    job: 'Developer',
    friends: [
        'Pedro',
        'Lucas',
        'Enzo',
        'Gabriel'
    ],
    hasDriversLicense: true,
};

augusto.calAge = function() {
    this.age = 2024 - this.birthYear;
    return this.age
};

augusto.calAge(this);
// Qualquer Função anexada á um objeto é chamada de método 

/*
O this aponta para o objeto que esta chamando a função no momento, ele proucura a chave relacionada ao que o procede. 

Por que usar o this?
Se trocarmos o nome do objeto vamos ter que trocar tambem onde definimos na function, então com o this temos que mecher menos e tambem faz repetir menos palavras deixando nosso clean code
*/

// Challenge
augusto.driveYesOrNo = function() {
    if (this.age >= 18) {
        console.log(`${this.firstName} is a ${this.age}-year old ${this.job}, and he has a driver's license`);
    } else {
        this.hasDriversLicense = false;
        console.log(`${this.firstName} is a ${this.age}-year old ${this.job}, and he not have a driver's license`);
    }
};

augusto.driveYesOrNo();
console.log(augusto);

