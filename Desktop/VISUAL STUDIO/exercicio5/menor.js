let n1 = parseFloat(prompt("informe o primeiro número"))
let n2 = parseFloat(prompt("informe o segundo número"))
let n3 = parseFloat(prompt("informe o terceiro número"))

if (n1 < n2 && n1 < n3) {
    document.write(n1)
} 
else if (n2 < n1 && n2 < n3) {
    document.write(n2)
}
else if (n3 < n1 && n3 < n2) {
    document.write(n3)
} 