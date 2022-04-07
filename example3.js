//3 - Crie um algoritmo que leia o valor de um jantar, calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago.


let dinnerPrice = 123.90;
let costServerTip = 0.10;
let totalDinnerPrice;

let serverTip = dinnerPrice * costServerTip;
totalDinnerPrice = dinnerPrice + serverTip;

console.log(`Total do jantar: R$ ${dinnerPrice}\nValor da taxa de serviço: R$ ${serverTip}\nValor total: R$ ${totalDinnerPrice.toFixed(2)}`);