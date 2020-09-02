let peso: number = 70;
let altura: number = 190; 
let imc: number;

imc = (peso / (altura * altura))* 10000;

let imc2 = (imc.toFixed(2)); 

if (imc < 18.5) {

    console.log("\nSeu IMC é: " + imc2 + " - Abaixo do Peso");
}
else if ((imc >= 18.5) && (imc <= 24.9)) {

    console.log("\nSeu IMC é: " + imc2 + " - Peso Ideal");
}
else if ((imc >= 25) && (imc <= 29.9)) {

    console.log("\nSeu IMC é: " + imc2 + " - Acima do Peso");
}
else if ((imc >= 30) && (imc <= 34.9)) {

    console.log("\nSeu IMC é: " + imc2 + " - Obesidade Grau 1");
}
else if ((imc >= 35) && (imc <= 40)) {

    console.log("\nSeu IMC é: " + imc2 + " - Obesidade Grau 2");
}
else {

    console.log("\nSeu IMC é: " + imc2 + " - Obesidade Grau 3");
}

	
