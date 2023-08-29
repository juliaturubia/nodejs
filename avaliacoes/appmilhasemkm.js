/** Conversor de milhas em km */

const read = require('readline-sync')

let m,km, conta

console.clear
console.log("")
console.log("==================================")
console.log("=== Conversor de Milhas em KM ====")
console.log("==================================")
console.log("")

m = Number(read.question("Digite em milhas:  ").replace(",","."))

km = 1.60934

conta = (m * km)


console.log ()
console.clear()
console.log (`................................................................`)
console.log (`               Milha em KM é ${conta}`)
console.log (`................................................................`)
console.log ()
