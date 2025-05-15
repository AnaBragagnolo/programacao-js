/*
    para, faca
    contador; condicao; manipulador do contador (incremento/decremento)

    quantidadeDePetiscos; quantidadeDePetiscos <= quantidadeCalculada; quantidadeDePetiscos++
*/
const quantidadeCalculada = 3

for (let quantidadeDePetiscos = 1; quantidadeDePetiscos <= quantidadeCalculada; quantidadeDePetiscos++) {
    console.log('Dando o petisco de numero ' + quantidadeDePetiscos) // acao de dar o petisco
}

console.log('------------')

//Exemplo 2

for (let quantidadeDePetiscos = 1;quantidadeDePetiscos <= quantidadeCalculada; quantidadeDePetiscos++){
    //acao de dar um petisco
    console.log(`Dando o petisco de n. ${quantidadeDePetiscos}`)
}

const gatos = ['Lessie', 'Pony', 'Fumaca']

for (let indice = 0; indice <gatos.length;indice++){
    console.log(`Dando o Petisco para ${gatos[indice]}`)
}

console.log('------------')

//Exemplo 3 - for dentro de for

for (let quantidadeDePetiscos = 1; quantidadeDePetiscos <= quantidadeCalculada; quantidadeDePetiscos++) {
    // acao de dar o petisco
    console.log(`Dando o petisco de nº: ${quantidadeDePetiscos}`)
    for (let indice = 0; indice < gatos.length; indice++) {
        console.log(`Dando o petisco para ${gatos[indice]}`)
    }
}