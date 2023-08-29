/** Cáuculo da Hora Técnica */

const read = require('readline-sync')

let custo, estimativa, remuneracao, total, horames, horatecnica

remuneracao = Number(read.question("Remuneracao mensal pretendida:  ").replace(",","."))
horames = Number(read.question("Carga horaria mensal de trabalho: ").replace(",","."))
custo = Number(read.question("Custo Operacional: ").replace(",","."))

horatecnica = (((remuneracao +(remuneracao * 0.3))+ custo) + (remuneracao * 0.2))/ horames

console.clear()
console.log(`A hora técnica é: R$ ${horatecnica.toFixed(3)}`)

estimativa = Number(read.question("Estimativade horas de servico: ").replace(",","."))

total = horatecnica * estimativa

console.clear()
console.log(`O valor Total é: ${total.toFixed(2)}`)