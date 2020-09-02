var somapar = 0;
var somaimpar = 0;
for (var i = 2; i <= 1000; i = i + 2) {
    somapar = somapar + i;
}
console.log("A soma dos pares: " + somapar);
for (var i = 1; i < 1000; i = i + 2) {
    somaimpar = somaimpar + i;
}
console.log("A soma dos impares: " + somaimpar);
