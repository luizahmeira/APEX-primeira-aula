let pedido = prompt("escolha dentre as seguintes opções, Pizza = R$12,00, Pão de Queijo = R$ 4,00, Macarrão R$ 16,00, Pastel = R$ 4,50")
let pagamento = parseFloat(prompt("valor que será dado ao caixa"))
let troco = (pedido - pagamento)

if(pedido == "Pizza" && pagamento == "12") {
    document.write("compra finalizada")
}

else if(pedido == "Pizza" && pagamento != "12") {
    document.write("troco",  pagamento - 12)
}


else if(pedido == "Pão de queijo" && pagamento == "4") {
    document.write("compra finalizada")
}
else if(pedido == "Pão de queijo" && pagamento != "4") {
    document.write("troco",  pagamento - 4)

}


else if(pedido == "Macarrão" && pagamento == "16") {
    document.write("compra finalizada")
}
else if(pedido == "Macarrão" && pagamento != "16") {
    document.write("troco", pagamento - 16)

}


else if(pedido == "Pastel" && pagamento == "4.50") {
    document.write("compra finalizada")
}
else if(pedido == "Pastel" && pagamento != "4.50") {
    document.write("troco", pagamento - 4.50)
}