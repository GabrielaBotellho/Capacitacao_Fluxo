const fs = require('node:fs');

class Reserva {
    constructor(id, idPropriedade, idHospede, checkin, checkout){
        this.id = id
        this.idPropriedade = idPropriedade
        this.idHospede = idHospede
        this.checkin = checkin
        this.checkout = checkout
    }
}

class ReservaFuncoes{
    constructor(filePath) {
        this.filePath = filePath;
        this.reservas = this.lerReserva()
    }

    lerReserva() {
        try {
            const reservaJSON = fs.readFileSync(this.filePath,'utf-8');
            return JSON.parse(reservaJSON);
        } catch (error) {
            return[]
        }
    }

    salvarReserva(){
        const reservaJSON = JSON.stringify(this.reserva, null , 2 );
        fs.WriteFileSync(this.filePath, reservaJSON, 'utf-8')
    }

    cadastrarReserva( id, senha, nome, contato ) {
        const id = this.identificarUltimoIdHospede() + 1;
        const novaReserva = new Funcoes(id, idPropriedade, idHospede, checkin, checkout);
        this.reservas.push(novoreserva);
        this.salvarReserva();
        console('Reserva cadastrada com sucesso!')
    }

    removerReserva(id){
        this.reservas = this.reserva.filter( reserva => reserva.id !== id) ;
        this.salvarReserva ();
        console.log('Reserva removida com sucesso!')
    }

    identificarUltimoIdReserva(){
        return this.reservas[this.reservas.length-1].id;
    }


}
