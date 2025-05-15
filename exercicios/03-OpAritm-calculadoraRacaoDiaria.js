/* Calculadora de ração diária
Crie um script que receba o peso do dog em kg + estoque atual de ração em gramas. 
Calcule a quantidade diária de ração com base na seguinte fórmula: Gramas por dia = peso X 30 gramas

Exiba: 
- Nome do dog
- Peso
- Quantidade de ração recomendada por dia
- Quantos dias o estoque atual vai durar


const nomeDog = 'Tati'
const peso = 3
estoqueAtual = 1800

qtdadeDiaria = peso * 30

duracaoEstoque = estoqueAtual / qtdadeDiaria 

console.log(nomeDog)
console.log(peso + 'kg')
console.log(qtdadeDiaria + ' gramas recomendadas por dia')
console.log('O estoque deve durar ' + duracaoEstoque + ' dias')
*/

//Com função: 

function simulador(nomeDog, peso, estoqueAtual) {

    
    qtdadeDiaria = peso * 30
    duracaoEstoque = estoqueAtual / qtdadeDiaria 

    console.log(nomeDog)
    console.log(peso + 'kg')
    console.log(qtdadeDiaria + ' gramas recomendadas por dia')
    console.log('O estoque deve durar ' + duracaoEstoque + ' dias') }

    simulador('Mel', 3, 1800)
    simulador('Tati', 10, 5000)