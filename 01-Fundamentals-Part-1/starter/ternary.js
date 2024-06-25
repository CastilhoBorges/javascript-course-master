function verifyAge(agE) {
    return agE >= 18 ? 'You can drink' : `You can't drink`;
}

const canOrNot = verifyAge(21)
console.log(canOrNot);