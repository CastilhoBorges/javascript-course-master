// BMI = MASS / (HEIGHT * 2)

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        return this.mass / (this.height * this.height);
    }
};
mark.bmi = mark.calcBMI().toFixed(1);


const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        return this.mass / (this.height * this.height);
    }
};
john.bmi = john.calcBMI().toFixed(1);

console.log(`${mark.bmi > john.bmi ? mark.fullName : john.fullName}'s BMI (${mark.bmi > john.bmi ? mark.bmi : john.bmi}) is higer than ${mark.bmi < john.bmi ? mark.fullName : john.fullName}'s (${mark.bmi < john.bmi ? mark.bmi : john.bmi})`);





