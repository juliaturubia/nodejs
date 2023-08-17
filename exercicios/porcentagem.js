const read = require('readline-sync')

let n, p, r

n = Number(read.question("Digite o numero "))
p = Number(read.question("Digite a porcentagem "))

r = (n * p)/100

console.log (`${r} é ${p}% de ${n}`)