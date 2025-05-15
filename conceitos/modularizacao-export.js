/*
    Sintaxe CommonJS:
        moculare.exports = {} / require('')

    ESM = Ecmascript Standard Modules
        export {} / import
*/

function exibirNomeDoDog(nome) {
    console.log(nome)
}

exibirNomeDoDog('Lilo')
exibirNomeDoDog('Tati')
exibirNomeDoDog('Pedrinho')

// export {} / import

export {
    exibirNomeDoDog
}



