var numeros = 1
var impar = 0
var par = 0

 
do {var numero = parseFloat(prompt("informe um número"))
if(numero %2 == 0) {
    par++
} else {
    impar++
}} while(numero <= 10)


document.write("quantidade de números pares digitados: \n", par)
document.write("quantidade de numeros impares: \n", impar)