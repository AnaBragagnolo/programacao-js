/**
 * Console API
 */
console.log("Aula inicial JS")
console.error("Falha na execução")
console.warn("Atenção")
console.table([{
    nome: 'Samuel',
    turma: '02',
    disciplina: 'Prog JS'
}, 
{
    nome: 'Ana',
    turma: '02',
    disciplina: 'Prog JS'
}]
    )
/**
 * Constantes e variáveis
 */
//const - informações que nunca mudam
// var ou let - informações que podem mudar

//informações de um dog que não mudam - precisa ser declarado
const nome = 'Loki'
const raca = 'SRD / Vira lata'
const sexo = 'Macho'
const cor = 'Caramelo'
const dataDeNascimento = '01/01/2020' 
const porte = 'M'

//informações que mudam (utiliza-se 'let' ou 'var' na declaração) - não precisa ser declarado
let idade = 5
let peso = 10.5
let vacinado = true
let castrado = false 
let tamanho = 'M'

// hoisting -> içamento ou elevação

const irmaos = [
    {
        nome: "Thor",
        idade: 3
    },
    {
        nome: "Hela",
        idade: 4
    }
]

console.table(irmaos)

/**
 * Tipos de dados - cadeia, inteiro, real, logico, vetor, matriz
 * cadeia - String
 * inteiro/real - Number
 * logico - Boolean
 * vetor/matriz - Array
 * 
 * undefined - valor não definido
 * null - valor definido = nulo
 * 
 * BigInt = Number para números muuuito grande
 * Symbol = 'identificador único'
 */

/**
 * Strings
 * pode ser declarada com aspas simples', aspas duplas" ou crase´
 */

const turma = "02"
let data = "05 de abril"


console.log("Aula 03 da turma " + turma + " no sabado dia 05 de abril" + data)

console.log(`Aula 03 da turma ${ turma } no sabado dia ${ data }`) //interpolação de strings

// split - separar a string numa lista (vetor)
// entre as aspas deve ser colocado a partir do que vc deseja separar

nomesDeAlunos = ("Ana Carol Deise Joao")
const nomesDeAlunosSplit = nomesDeAlunos.split (" ")
console.log(nomesDeAlunosSplit)

//toLowerCase e toUpperCase - padronização de strings em 'tudo minusculo' ou 'tudo maiusculo'

console.log(nomesDeAlunos.toLowerCase())
console.log(nomesDeAlunos.toUpperCase())

//.includes = retorna nomes inclusos em uma lista (true/false)

console.log(nomesDeAlunos.includes("Ana"))
console.log(nomesDeAlunos.toLowerCase().includes("ana"))

//replaceAll = Chai - biblioteca de asserções

console.log(nomesDeAlunos.replaceAll('a', 'i'))

//.trim = utilizados para remover algum item. Por ex. espaços digitados por engano num cadastro

const conceitosLogica = "     inteiro real caderia caracteres  "

console.log(conceitosLogica.trim())

// .slice = corta parte da string pegando o 1o caracter de interesse e o 1o q não deve aparecer no recorte
//.substring = comportamento praticamente igual ao slice

let dataParaCortar = "Dia 05 de abril"
const cpf = "51134332092"

// Dia 05 de abril
// 01234567891011121314

console.log(dataParaCortar.slice(4, 6))
console.log(cpf.slice(0, 3))