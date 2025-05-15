/*
Usado para até 3 condicionais

condição (se verdadeira)
    ação dentro do if
senao se (outra condição)
    ação dentro do if
senão 
    açao dentro do else
*/

if (10 < 5) {
    console.log('valor é maior')
} else {
    console.log('valor é menor')
}

const idade = 3
const porte = 'P'

if (idade >= 2) {
    console.log('Pode ser adotado pela idade')
} else if (porte === 'P') {
    console.log('Pode ser adotado pelo porte')
} else {
    console.log('Não pode ser adotado')
}