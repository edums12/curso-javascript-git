let listaJogos = [
    primeiroJogo = {
        nome: "Devil May Cry",
        valor: 49.50
    },

    segundoJogo = {
        nome: "My Little Ponei",
        valor: 500.30
    }
]


let totalCustoJogos = 0;
listaJogos.forEach(jogo => {
    console.log(`${jogo.nome}: ${jogo.valor.toFixed(2)}`)
    totalCustoJogos += jogo.valor
});

console.log(`\nValor total: ${totalCustoJogos.toFixed(2)}`)