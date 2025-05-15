/*
Validador de idade mínima para adoção
Crie um script que verifique se um dog pode ser adotado 
com base na idade mínima definida, por exemplo, 2 anos.
Use os operadores adequados e exiba:
- Nome do dog
- Idade
- Se está apto ou não para adoção

Extra: aplique uma regra com operador lógico para permitir 
que se o cão for de pequeno porte, pode ser adotado independente da idade.
*/

const nomeDog = 'Pedrinho'
let idadeDog = 1
const idadeMinimaParaAdocao = 2

//const adocao = idadeDog >= 2 ? 'Apto' : 'Inapto' ----- substituido no Extra

console.log(nomeDog)
console.log(idadeDog + " ano(s)")
// console.log(adocao + " para adoção") ----- substituido no Extra

//Extra

const porte = "medio"

const adocao = porte == "pequeno" ? 'Apto' : idadeDog >= 2 ? 'Apto' : 'Inapto'
console.log(adocao + " para adoção")

// Solução Extra 2 usando operador lógico || > ou
const adocao2 = idadeDog >= idadeMinimaParaAdocao || porte == "pequeno"
console.log(adocao2)
