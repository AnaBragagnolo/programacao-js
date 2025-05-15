/**
 * Validador de nomes para tags
 * 
 * Crie um script para limpar e padronizar nomes
 * 
 * Aplique as formatações e exiba:
 * - o nome original, como foi cadastrado
 * - o nome formatado
 * 
 * Extra: aplique uma regra que se confira se o nome informado possuiu apenas uma palavra. Exiba se o nome é válido ou não.
 * 
 * Decomposição:
 * - declara nome
 * - remove espaços
 * - padroniza 1a letra maiuscula e o restante minúscula
 * - exibe nome original e nome formatado
 */

const nome = " vitorIa heLEna "

const nomeRemoverEspaços = nome.trim()

const nomesSepararNomes = nomeRemoverEspaços.split (" ")

const nomeFormatado0 = nomesSepararNomes[0].charAt(0).toUpperCase() + nomesSepararNomes[0].slice(1).toLowerCase()

// se nomesSepararNomes recebe [1] ou mais: percorre todos os nomes deixando 1a letra maiusculo e as outras minusculas

const nomeFormatado1 = nomesSepararNomes[1].charAt(0).toUpperCase() + nomesSepararNomes[1].slice(1).toLowerCase()

const nomeComposto = (nomeFormatado0 + " " + nomeFormatado1)

const exibirNomes = [nome, nomeComposto]

console.log(exibirNomes)