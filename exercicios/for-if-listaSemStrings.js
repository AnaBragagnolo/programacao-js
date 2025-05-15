//Crie uma função que pega uma lista de inteiros e strings e retorna uma nova lista sem as strings.

const listaCompleta = [1, 'ana', 2, 'fabio', 3, 'luísa', 4, 'marina'] 

/*
function listarSemStrings(listaCompleta) {
    
    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    let contador = 0

    for (let i = 0; i <= listaCompleta.lenght; i++)
        if (numeros.includes(listaCompleta[i])) {
            contador++;
    }
    return contador
}
  */
 
function listarSemStrings(listaCompleta) {
    return listaCompleta.filter(item => typeof item === 'number');
  }
    
console.log(listarSemStrings(listaCompleta))

/*
Programa Retornando Número de Vogais
Retorne o número de vogais no texto fornecido. Consideraremos a, e, i, o e u como vogais para este Kata. O texto de entrada conterá apenas letras minúsculas e/ou espaços. 
Letras acentuadas não fazem parte desse desafio.
*/

const texto = ('paralelepipedo')

function contarVogais(texto) {

    const vogais = ['a', 'e', 'i', 'o', 'u']
    let contador = 0

    for (let i = 0; i <= texto.length; i++)
        if (vogais.includes(texto[i])) {
            contador++;
    }
    return contador
}

console.log("Quantidade de vogais: " + contarVogais(texto))