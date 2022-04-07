//4 - Escreva um programa que pergunte a quantidade de km percorridos por um carro alugado pelo usuário, assim como a quantidade de dias 
//    pelos quais o carro foi alugado. Calcule o preço a pagar, sabendo que o carro custa 60,00 reais por dia e 0,15 centavos por km rodado.

let totalKM = 400;
let totalDays = 15;

let totalPrice = (totalKM * 0.15) + (totalDays * 60); 


console.log(`Total KM rodados: ${totalKM} KM\nDias alugados: ${totalDays} dias.\nValor total: R$ ${totalPrice}`);