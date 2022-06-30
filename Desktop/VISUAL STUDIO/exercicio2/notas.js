let notas1 = parseFloat(prompt("informe sua primeira nota"))
let notas2 = parseFloat(prompt("informe sua segunda nota"))
let notas3 = parseFloat(prompt("informe sua terceira nota"))

let media = (notas1 + notas2 + notas3)/3 

if(media > 7) {
    document.write("você foi aprovado com média"  + media)
}
  else if(media == 7) {
    document.write("você foi aprovado com média 7")
 } 
  else {document.write("reprovado")} 