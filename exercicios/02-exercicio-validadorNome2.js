const nome = " vitorIa heLEna "

const nomeRemoverEspaços = nome.trim()

const nomeFormatado = nomeRemoverEspaços.charAt(0).toUpperCase() + nomeRemoverEspaços.slice(1).toLowerCase()

const exibirNomes = [nome, nomeFormatado]

console.log(exibirNomes)

//o 2o nome tbm deveria ficar com a primeira letra maiúscula

//Extra: aplique uma regra que confira se o nome informado possui apneas uma palavra. Exiba se o nome é válido ou não.

if (nomeFormatado.includes(" ")){
    console.log("Nome inválido!")
}
