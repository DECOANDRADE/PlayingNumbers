alert("Olá, nos informe dois números para continuarmos")

let firstNumber = prompt("Digite o primeiro número: ")
let secondNumber = prompt("Agora digite o segundo número: ")

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = firstNumber + secondNumber
alert("A soma dos números é: " + sum)
const sub = firstNumber - secondNumber
alert("A subtração dos números é: " + sub)
const mult = firstNumber * secondNumber
alert("A multiplicação dos números é: " + mult)
const div = firstNumber / secondNumber
alert("A divisão dos números é: " + div)
const restDiv = firstNumber % secondNumber
alert("O resto da divisão dos número é: " + restDiv)


if(sum % 2 == 0) {
    alert("A soma dos números é PAR ")
} else {
    alert("A soma dos números é ÍMPAR ")
}


if(firstNumber == secondNumber) {
    alert("Os números informados foram iguais!")
} else {
    alert("Os números informados não são iguais")
}
