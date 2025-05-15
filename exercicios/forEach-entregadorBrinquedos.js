/*
Entregador de brinquedos para os dogs
- Lista de brinquedos
- Entregue um por vez
- Exiba o nome de cada brinquedo entregue

Usar forEach
*/

function entregadorBrinquedos() {

const listaBrinquedos = ['Bola', 'Osso', 'Chocalho']

listaBrinquedos.forEach(brinquedo => {
    console.log(brinquedo + ' foi entregue!')
})
}
   
entregadorBrinquedos()



