/**
 * App para calculcar a média de 2 notas
 */

//importação do pacote readline-sync */
const read = require ('readline-sync')

//variaveis */
let nome, disciplina
let nota1,nota2, media

console.clear()
console.log(" ___      _     _   _ ")      
console.log("| _ ) ___| |___| |_(_)_ __ ") 
console.log("| _ \\/ _ \\ / -_)  _| | '  \\ ")
console.log("|___/\\___/_\\___|\\__|_|_|_|_| ")
console.log("")  

//entrada das variaveis
nome = read.question("Digite o seu nome: ")
disciplina = read.question ("Digite a disciplina: ")
nota1 = Number(read.question ("Digite a nota 1: ").replace(",","."))
nota2 = Number(read.question ("Digite a nota 2: ").replace(",","."))

//processamento
media = (nota1 + nota2) / 2

//saida
console.clear()
console.log("------------------------------------------------------------")
console.log("ficha do aluno: ")
console.log(`nome: ${nome}`)
console.log(`disciplina: ${disciplina}`)
console.log(`nota1: ${nota1}`)
console.log(`nota2: ${nota2}`)
console.log(`media final : ${media}`)
console.log(media)
console.log("------------------------------------------------------------")