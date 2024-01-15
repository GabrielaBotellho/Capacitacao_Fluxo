const fs = require('node:fs');

class Hospede {
    constructor(id, nome, endereco, historico) {
        this.id = id;
        this.nome = nome;
        this.endereco = endereco;
        this.historico = historico;
    }
}

class HospedeFuncoes {
    constructor(filePath) {
        this.filePath = filePath;
        this.hospedes = this.lerHospedes()
    }

    lerHospedes() {
        try {
            const hospedesJSON = fs.readFileSync(this.filePath, 'utf-8');

            return JSON.parse(hospedesJSON);
        } catch (error) {
            return [];
        }
    }
    
    salvarHospedes() {
        const hospedesJSON = JSON.stringify(this.hospedes, null, 2);
        fs.writeFileSync(this.filePath, hospedesJSON, 'utf-8')
    }

    adicionarHospedes(nome, endereco, historico) {
        const id = this.identificarUltimoIdHospede() + 1;
        const novoHospede = new Hospede(id, nome, endereco, historico);
        this.hospedes.push(novoHospede);
        this.salvarHospedes();
        console.log('Hóspede adicionado com sucesso!');
    }


    listarHospedes() {
        console.log('Lista de Hóspedes: ');
        this.hospedes.forEach(hospede => {
            console.log(
                `
                ID: ${hospede.id},
                Nome: ${hospede.nome},
                endereco: ${hospede.endereco}
                `
            )
        });
    }

    buscarHospedePorNome(nome) {
        return this.hospedes.find(hospede => hospede.nome === nome);
        
    }

    atualizarHospede(id, novoNome, novoendereco) {
        const hospedeIndex = this.hospedes.findIndex(hospede => hospede.id === id);

        if(hospedeIndex !== -1) {
            this.hospedes[hospedeIndex].nome = novoNome;
            this.hospedes[hospedeIndex].endereco = novoendereco;
            this.salvarHospedes();
            console.log('Hóspede atualizado com sucesso!');
        } else console.log('Hóspede não encontrado.');
    }
                            
    removerHospede(id) {
        this.hospedes = this.hospedes.filter(hospede => hospede.id !== id);
        this.salvarHospedes();
        console.log('Hóspede removido com sucesso!')
    }

    identificarUltimoIdHospede(){
        return this.hospedes[this.hospedes.length-1].id;
    }

}

const hospedeJSON = new HospedeFuncoes('database/hospedes.json');

//hospedeJSON.adicionarHospedes(1, 'Matheus', '21967505770', '')
//hospedeJSON.adicionarHospedes(2, 'Emilly', '21917504880', '')
//hospedeJSON.adicionarHospedes(3, 'Soneca', '21927504481', '')

module.exports = hospedeJSON
