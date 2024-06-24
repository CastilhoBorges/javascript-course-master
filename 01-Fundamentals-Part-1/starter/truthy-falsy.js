const money = 0;

function isMoney() {
    if (money) {
        return `Gaste tudo`
    } else {
        return `Ache um Job`
    }
}

console.log(isMoney())