/**
 * 
 * describe -> agrupador de testes
 * it       -> implementação do teste
 * 
 * TDD
 *  crio o teste
 *  vejo o teste falhar
 *  crio a implementação para o teste passar
 *  rodo o teste de novo
 *  refatoro o codigo para melhorar...
 * 
 * ASSERTION/ASSERCAO
 *  verifica se um copmportamento está de acordo com o esperado
 *  */

import { exibirNomeDoDogFormatado } from "../conceitos/testes-de-unidade.js"
import assert from 'node:assert'

describe('Testes do projeto', ()=> {
    it('deve exibir o nome do dog com letras maiúsculas', () => {
        assert.strictEqual(exibirNomeDoDogFormatado('Mimosa'), 'MIMOSA')
        // verifique se: valor atual é igual ao valor esperado
    })
    it('Primeiro teste', () => {

    })
    it('Segundo teste', () => {

    })
})