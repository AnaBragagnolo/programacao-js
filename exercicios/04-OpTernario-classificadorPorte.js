/*
Crie um script que classifique o porte com base no peso de forma simplificada, sendo:
- até 10kg -> Pequeno
- acima disso -> Médio

Use o operador ternário para determinar o porte. Exiba:
- Nome
- Peso
- Porte classificação
*/

const nome = 'Lucky'
const peso = 11

const porte = peso <= 10 ? 'Pequeno' : 'Médio'

console.log(nome + ', ' + peso + 'kg, ' + 'Classificação do porte: ' + porte)