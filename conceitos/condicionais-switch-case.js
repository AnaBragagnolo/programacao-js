/*
Usado a partir de 3 condicionais, quando compara valores diretos, não avaliando expressoes booleanas (true/false)
Comparar peso <= 10 não faz sentido para o switch case, somente valores diretos
escolha (condicao)
    se x: faça
    se y: faça
    se z: faça
*/

const peso = 10

switch (peso) {
    case 10:
        console.log('P')
        break
    case 20:
        console.log('M')
        break
    case 30:
        console.log('G')
        break
    default:
        console.log('ND')
}