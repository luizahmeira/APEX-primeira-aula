let n1 = parseFloat(prompt("informe o primeiro número"))
let n2 = parseFloat(prompt("informe o segundo número"))
let n3 = parseFloat(prompt("informe o terceiro número"))

if (n1 == n2 && n2 == n3) {
    document.write("equilatero")
} 
else if (n1 != n2 && n2 != n3) {
    document.write("escaleno")
}
else {
    document.write("isosceles")
} 