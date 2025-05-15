//async - assincrono

async function exibirNomeDoDogFormatado (nome) {
    return nome.toUpperCase()
}

//await - esperar

console.log(await exibirNomeDoDogFormatado('Pipoca'))