/** Conversor de Temperatura Fahrenheit para Celsius */

const read = require('readline-sync')

let c,f

console.clear
console.log("")
console.log("==================================")
console.log("==== Conversor de Temperatura ====")
console.log("==================================")
console.log("")

f = Number(read.question("Digite a temperatura em Fahrenheit ").replace(",","."))

c = (f - 32) /1.8 


console.log (`Temperatura em Celsiuis: ${c.toFixed(1)}°C`)
