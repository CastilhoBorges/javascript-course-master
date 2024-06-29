const augusto = [
    'Augusto',
    'Castilho',
    ['Pedro', 'Enzo'],
    'Developer',
    2005
];

// Fazendo um loop de tras para frente ... [4], [3] ... [0];

for (let i = augusto.length - 1; i >= 0; i--) {
    console.log(augusto[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`--------------Exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Repetition ${rep}`);
    }
 }