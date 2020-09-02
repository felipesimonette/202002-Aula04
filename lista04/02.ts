
let somapar: number = 0;
let somaimpar: number = 0;

for (let i: number = 2; i <= 1000; i = i + 2) {
    somapar = somapar + i;
}

console.log("A soma dos pares: " + somapar);

for (let i: number = 1; i < 1000; i = i + 2) {
    somaimpar = somaimpar + i;
}

console.log("A soma dos impares: " + somaimpar);


