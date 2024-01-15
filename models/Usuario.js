const fs = require('node:fs');

class Usuario {
    constructor(id, senha, nome, contato){
        this.id = id;
        this.senha = senha;
        this.nome = nome;
        this.contato = contato;
    }
}

class UsuarioFuncoes {
    constructor(filePath) {
        this.filePath = filePath;
        this.usuarios = this.lerUsuario()
    }

    lerUsuario() {
        try {
            const usuarioJSON = fs.readFileSync(this.filePath,'utf-8');
            return JSON.parse(usuarioJSON);
        } catch (error) {
            return[]
        }
    }

    salvarUsuario(){
        const usuarioJSON = JSON.stringify(this.usuario, null , 2 );
        fs.WriteFileSync(this.filePath, usuarioJSON, 'utf-8')
    }

    adicionarUsuarios(nome, endereco, historico) {
        const id = this.identificarUltimoIdUsuario() + 1;
        const novoUsuario = new Usuario(id, nome, endereco, historico);
        this.usuarios.push(novoUsuario);
        this.salvarUsuarios();
        console.log('Funcionário adicionado com sucesso!');
    }

    removerUsuario(id){
        this.usuarios = this.usuario.filter( usuario => usuario.id !== id) ;
        this.salvarUsuario ();
        console.log('Funcionário removido com sucesso!')
    }

    identificarUltimoIdUsuario(){
        return this.usuarios[this.usuarios.length-1].id;
    }

    login(nome, senha) {

        //  Busca usuário no banco de dados 'user.json'
        //  caso exista retorne o objeto usuário
        const usuario = this.usuarios.find((usuario) => {
            if(usuario.nome === nome && usuario.senha === senha){
                return usuario;
            }
            return null;
        });

        if(!usuario) {
            console.error('Algo deu errado. Ou não existe esse usuário ou suas credenciais estão incorretas.');
            return false;
        }

        const userLogadoPath = 'database/userLogado.json'; // Caminho para o banco de dados do user logado
        const usuarioJSON = JSON.stringify(usuario, null , 2 );
        const usuarioLogado = fs.readFileSync(userLogadoPath,'utf-8');

        if(!usuarioLogado) {
            fs.writeFileSync(userLogadoPath, usuarioJSON, 'utf-8');
            console.log('Usuário logado!')
            return true;
        } else {
            console.error('Já existe um usuário logado. Saia para entrar.');
            return false;
        }
    }
   
}

const usuarioFuncoes = new UsuarioFuncoes('database/usuarios.json');

module.exports = usuarioFuncoes;
