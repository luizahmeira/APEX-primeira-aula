let numero1 = parseFloat(prompt("informe o número"))
let numero2 = parseFloat(prompt("informe o numero"))

let OM = (prompt("informe a operação, sendo + adição, - subtração, / divisão, * multiplicação"))

if(OM == "+") {
    document.write(numero1 + numero2)
}
else if(OM == "-") {
    document.write(numero1 -numero2)
} 
else if(OM == "/") {
    document.write(numero1 / numero2)
}
else if(OM == "*") {
    document.write(numero1 * numero2)
}