/** APP para calcular a porcentagem das vendas */

const read = require('readline-sync')

let custo, lucro, venda, total

custo = Number(read.question("Digite o cutso: ").replace(",","."))
lucro = Number(read.question("Digite a porcentagem do lucro: ").replace(",","."))

venda = (custo * lucro)/100
total = custo + venda

console.log ()
console.clear()
console.log (`................................................................`)
console.log (`                Total da Venda ${total}`)
console.log (`................................................................`)
console.log ()



