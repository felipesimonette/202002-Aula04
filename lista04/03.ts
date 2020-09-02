let vetor: number[];
let soma: number;
let maior: number;
let menor: number;

soma = 0;
maior = 0;
menor = 99999999;

vetor = [0];


for (let i: number = 0; i < 100; i++) {  //preenchendo o vetor
    
    vetor.push(Math.round(Math.random() * 100));
    soma = soma + vetor[i];

    if (vetor[i] > maior) { 	
        maior = vetor[i];		
    }
}


for (let j: number = 0; j < 100; j++) {
    if (vetor[j] < menor) {
        menor = vetor[j];
    }
}

console.log(vetor);
console.log("O Menor valor é: " + menor);
console.log("O Maior valor é: " + maior);
console.log("A soma dos valores: " + soma);
console.log(vetor.sort());
