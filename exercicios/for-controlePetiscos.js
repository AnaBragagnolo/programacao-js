/*
Crie um script que receba uma quantidade de petiscos e dê 1 por vez até o dog estar satisfeito.
Use a estrutura de repeticao for contado.
Exiba:
- cada vez que o petisco for entregue;
- quando o dog estiver satisfeito;
*/

function contadorDePetiscos () {
    
    contador = 1
    const quantidadePetiscos = 3

    for (let contador = 1; contador <= quantidadePetiscos; contador++){
    console.log('Petisco ' + contador + ' foi entregue.')
}
console.log('Dog satisfeito!')
}

contadorDePetiscos()