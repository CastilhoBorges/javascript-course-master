const hasDriverLicense = true;
const hasGoodVision = true;

console.log(!hasDriverLicense && hasGoodVision); // False 
console.log(hasDriverLicense || hasGoodVision); // true 
console.log(hasDriverLicense && hasGoodVision); // true 
console.log(!hasDriverLicense || hasGoodVision); // true 

if (hasDriverLicense && hasGoodVision) {
    console.log('true');
} else {
    console.log('false')
}