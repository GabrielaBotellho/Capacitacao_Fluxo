const fs = require('node:fs')

class Anuncio {
    constructor( id, idProprietario, idPropriedade, titulo, descricao, status ){
        this.id = id
        this.idProprietario = idProprietario
        this.idPropriedade = idPropriedade
        this.titulo = titulo
        this.descricao = descricao
        this.status = status
    }
}

class AnuncioFuncoes {
    constructor(filePath){
        this.filePath = filePath
        this.anuncio = this.lerAnuncio()
    }

    lerAnuncio(){
        try{
            const anuncioJSON = readFileSync(this.filePath,'utf-8')
            return JSON.parse(propriedadesJSON)
        } catch (error) {
            return[]
        }
    }

    salvarAnuncios(){
        const anuncioJSON = JSON.stringify(this.anuncio, null, 2)
        fs.WriteFileSync(this.filePath, anuncioJSON, 'utf-8')
    }

    adicionarAnuncio(idProprietario, idPropriedade, titulo, descricao, status){
        const id = this.identificarUltimoIdAnuncio() + 1 
        const novoAnuncio = new Anuncio(id, idProprietario, idPropriedade, titulo, descricao, status);
        this.anuncio.push(novoAnuncio);
        this.salvarAnuncios()
        console.log('Anúncio adicionado com sucesso!' )
    }

    listarAnuncio() {
        console.log('Lista de anúncios:')
        this.anuncio.forEach (Anuncio => {
            console.log(
                `
                ID: ${anuncio.id};
                ID proprietario: ${anuncio.idProprietario}
                ID propriedade: ${anuncio.idPropriedade}
                titulo: ${anuncio.titulo}
                descricao: ${anuncio.descricao}
                status: ${anuncio.status}
                `
            )
        })

    }

    buscarAnuncioPorTitulo(titulo) {
        return this.anuncio.find(anuncio => anuncio.id === id )
    }

    atualizarAnuncio(id, novoIdProprietario, novoIdPropriedade, novoTitulo, novaDescricao, novoStatus) {
        const anuncioIndex = this.anuncios.findIndex(anuncio => anuncio.id === id );{
            if (anuncioIndex !== -1 ); {
                this.anuncio[anuncioIndex].IdProprietario = novoIdProprietario
                this.anuncio[anuncioIndex].idPropriedade = novoIdPropriedade
                this.anuncio[anuncioIndex].titulo = novoTitulo
                this.anuncio[anuncioIndex].descricao = novaDescricao
                this.anuncio[anuncioIndex].status = novoStatus
                this.salvarAnuncios()
                console.log ('Anúncio atualizado com sucesso!')
            } else {
                console.log('Anúncio não encontrado!') ;
        }
    }

    removerAnuncio(id);{
        this.anuncio = this.anuncio.filter(anuncio => anuncio.id !== id)
        this.salvarAnuncios()
        console.log('Anúncio removido com sucesso!')
    }

    identificarUltimoIdAnuncio();{
        return this.hospedes[this.hospedes.length-1].id
    } 

    const anuncioJSON = new AnuncioFuncoes('database/hospedes.json')

}}
