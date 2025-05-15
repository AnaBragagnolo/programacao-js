function geradorDeTagsDeIdentificacao(nome) {
    return nome.toUpperCase()
}

export {
    geradorDeTagsDeIdentificacao
}

function verificarSePodeSerAdotado(idade,porte) {
    if (idade == 1 && porte == 'M') {
        return true
    }
}

export {
    verificarSePodeSerAdotado
}

function calcularConsumoDeRacao(nome, idade, peso) {
    return (peso * 300)
}
export {
    calcularConsumoDeRacao
}

function decidirTipoDeAtividadePorPorte(porte) {
    if (porte === 'pequeno') {
        return 'brincar dentro de casa'
    } else if (porte === 'médio') {
        return 'dar uma volta na quadra'
    } else if (porte === 'grande') {
        return 'dar 5 voltas na quadra'
    } else
        return "Digite apenas uma das opções: 'pequeno', 'médio' ou 'grande'"
}

export {
    decidirTipoDeAtividadePorPorte
}

async function buscarDadoAsync() {
    return 'Pipoca'
} 

export {
    buscarDadoAsync
}