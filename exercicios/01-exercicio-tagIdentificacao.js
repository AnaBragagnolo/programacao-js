/**
 * Gerador de tag de identificação
 */

const nome = "Lucky"
let idade = 2
var peso = 4
const raca = "vira-lata"
let adotado = true

const nomeTag = nome.toUpperCase()
const racaTag = raca.charAt(0).toUpperCase() + raca.slice(1).toLowerCase()

console.log(nomeTag + "\n" + racaTag + "\n" + peso + "kg")