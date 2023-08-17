/** Caixa de Super Mercado */

const read = require('readline-sync')

let total, desconto, totaldesconto, valorpagoemdinheiro, troco

total = Number(read.question("Digite o valor da compra ").replace(",","."))
desconto = Number(read.question("Digite o valor do desconto ").replace(",","."))

contadodesconto = (total * desconto)/100
totaldesconto = (total - contadodesconto)

console.log ()
console.clear()
console.log (`................................................................`)
console.log (`                Total a pagar ${totaldesconto}`)
console.log (`................................................................`)
console.log ()

valorpagoemdinheiro = Number(read.question("Digite o valor pago em dinheiro ").replace(",","."))

troco = (valorpagoemdinheiro - totaldesconto)

console.log ()
console.clear()
console.log (`................................................................`)
console.log (`                  Dar em troco ${troco}`)
console.log (`................................................................`)
console.log ()