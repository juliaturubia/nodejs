/** PDV - Ponto de vendas */

/** Importação de módulos */
const read = require('readline-sync')

/** Váriaveis */
let total, desconto, dinheiro, troco

console.clear()
console.log ("")
console.log ("   ___  ___/ /  __")
console.log ("  / _ \\/ _  / |/ /")
console.log (" / .__/\\_,_/|___/ ")
console.log ("/_/               ")
console.log ("")

/** Entrada */
valor = Number(read.question("Digite o valor total da compra ").replace(",","."))
desconto = Number(read.question("Digite o valor do desconto em % ").replace(",","."))

/** Processamento 1 */
total = valor - ((desconto * valor)/100)

/** saida 1 */
console.log(`Total: R$ ${total.toFixed(2)}`)
console.log("")
console.log("-------------------------------------------------------------")
dinheiro = Number(read.question("Digite o valor pago em dinheiro: ").replace(",","."))

/** Processamento 2 */
troco = dinheiro - total

/** Saida 2 */
console.log(`Troco: R$ ${troco.toFixed(2)}`)
