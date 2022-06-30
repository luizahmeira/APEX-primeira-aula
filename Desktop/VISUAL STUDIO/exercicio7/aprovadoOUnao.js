let notas1 = parseFloat(prompt("informe a primeira nota"))
let notas2 = parseFloat(prompt("informe a segunda nota"))
let notas3 = parseFloat(prompt("informe a terceira nota"))

let media = (notas1 + notas2 + notas3)/3

let faltas = parseFloat(prompt("informe a quantidade de faltas"))

if (faltas < 50 && media >= 7) {
    document.write("aprovado")
}
else {
    document.write("reprovado")
}