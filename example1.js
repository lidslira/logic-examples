//1 - Solicite o preço de uma mercadoria e o percentual de desconto 20%. Exiba no console o valor do desconto e o preço a pagar.

let productPrice = 30;
let productPriceWithDiscount, discountAmount;
const discount = 0.20;

discountAmount = productPrice * discount;
productPriceWithDiscount = productPrice - discountAmount;

console.log(`Valor do produto: R$ ${productPrice}\nValor do desconto: R$ ${discountAmount}\nValor total: R$ ${productPriceWithDiscount}`);