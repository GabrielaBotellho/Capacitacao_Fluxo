const requisicao = require('readline-sync');
const Hospede = require('./models/Hospede.js');
const Propriedade = require('./models/Propriedade.js')
const Usuario = require('./models/Usuario.js');

// Menu do sistema: 

const mensagemMenu = `
---------- MENU ----------

    [1] Adicionar Hospede          [5] Buscar Hospede        [9]  Editar Hospede        [13] Excluir Hospede
    [2] Adicionar Propriedade      [6] Buscar Propriedade    [10] Editar Propriedade    [14] Excluir Propriedade
    [3] Adicionar Reserva          [7] Buscar Reserva        [11] Editar Reserva        [15] Excluir Reserva
    [4] Adicionar Anúncio          [8] Buscar Anúncio        [12] Editar Anúncio        [16] Excluir Anúncio
    

Escolha um item da lista: `

// Funcionario acessando o sistema: 

const mensagemLogin = `
-------- LOGIN --------

    [1] Acessar uma conta 
    [2]  Realizar cadastro
    
Escolha uma opção: `

const respostaLogin = requisicao.question(mensagemLogin)

// Acessando a conta:

if (respostaLogin === '1') {
    usuarioLogin = requisicao.question('Nome de usuário:')
    senhaLogin = requisicao.question('Senha:')

    const logar = Usuario.login( usuarioLogin, senhaLogin) // resulta em true ou false

    if (logar === true ){
        respostaMenu = requisicao.question(mensagemMenu)

        switch (respostaMenu){
            case '1' : // Adicionando hospede:
                var nome = requisicao.question('Nome:')
                var endereco = requisicao.question('Endereço:')
                var frequencia = requisicao.question('Já frequentou a pousada:')

                if (frequencia === 'sim' || 's'){
                    propriedade = requisicao.question('Qual pousada já se hospedou:')
                    data = requisicao.question('Quando ficou hospedado')

                    var historico = ('Se hospedou', propriedade, 'na data:', data)
                    console.log(historico)
                } else {
                    return historico = ('Nunca frequentou a pousada!')
                }
            
                Hospede.adicionarHospedes(nome, endereco, historico)
                break
            
            case '2': // Adicionando Propriedade:
                 var nome = requisicao.question('Nome: ') 
                 var endereco = requisicao.question('Endereço: ')
                 var capacidade = requisicao.question('Capacidade: ')
                 var quartos = requisicao.question('Quantidade de quartos: ')
                var preco = requisicao.question('Valor por noite: ')
                var disponibilidade = requisicao.question('Disponibilidade: ')

                Propriedade.adicionarPropriedades(nome, endereco,capacidade, quartos, preco, disponibilidade)
                break
            
            case '3': // Adicionar Reserva:

                break

            case '4' : // Adicionar Anuncio: 
                //var idProprietario = // usar a busca por nome para buscar o id 
                //var idPropriedade = // usar a busca por nome para buscar o id
                var titulo = requisicao.question('Título do anúncio:')
                var descricao =requisicao.question('Descrição do anúncio:')
                var status = requisicao.question('Status do anúncio:')

                Anuncio.adicionarAnuncio(idProprietario, idPropriedade, titulo, descricao, status)








                
            

        }
        
        
        

    }


}


