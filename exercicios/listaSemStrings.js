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
