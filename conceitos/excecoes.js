/*
    tentar {
    }

lançar = throw
*/

//TENTAR FAZER ALGO QUE PODE DAR ERRO
try {
    console.log('Tentando alimentar o pet...')
    //throw new Error('pet não quis alimento')
    const nome = 'Ana'
    nome = 'Ligia'
    //TENTAR CONECTAR NO BANCO
    //EXECUTAR UMA QUERY
} catch (excecao) {
    //TRATAR ESSE ERRO - EXIBIR, SALVAR, MELHOR A DESCRIÇÃO DO ERRO
    console.log(excecao)
    console.log(excecao.name)
    console.log(excecao.message)

    //CAPTURAR A EXCECAO

} finally {
    //SEMPRE EXECUTA, COMO SE FOSSE UMA ACAO FINAL
    console.log('SEMPRE SEREI EXECUTADO')

    //FECHAR A CONEXAO COM O BANCO (AO MENOS GARANTIR QUE FOI FECHADA)
}