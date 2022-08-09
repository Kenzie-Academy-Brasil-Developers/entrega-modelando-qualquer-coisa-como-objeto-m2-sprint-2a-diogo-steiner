class Restaurante {
    constructor () {
        this.endereco = "Bairro das Laranjeiras"
        this.nome = "Sabor Brasileiro"
        this.tempoAtividade = "10 anos"
        this.especialidade = "Comida típica nordestina"
        this.slogan = "Fazendo comida com carinho e amor"
        this.Funcionamento = "Segunda à Sabado - das 12:00 até 21:00"
    }

    fazerPedito() {
        return `Um prato de miojo`
    }

    valorConta() {
        return `R$ 321,92`
    }

    pagarConta() {
        return `Conta Paga`
    }

    darFeadbeck() {
        return `Comida de excelente gostosura`
    }
}

const restaurante = new Restaurante

console.log(restaurante);
console.log(restaurante.fazerPedito());
console.log(restaurante.pagarConta());
console.log(restaurante.valorConta());
console.log(restaurante.darFeadbeck());






class RestaurenteFastFood {
    constructor () {
        this.nome = "Burguer Queen"
        this.estabelicimento = "Restaurante"
        this.modalidade = "Fast Food"
        this.tempoAtividade = "20 anos."
        this.especialidade = "hambúrgueres"
        this.slogan = "Comida rápida a um preço acessível"
        this.franquias = "Em toda a cidade de São Paulo"
        this.filial = "Centro"
        this.funcionamento = "Seg à Seg - das 9:00 até 22:00"
    }


    fazerPedito () {
        console.log(`Um mega hambúrguer de 10 toneladas`)
        return this.pagarConta()
    }

    pagarConta () {
        return `Conta paga, no valor de R$ 9,90` 
    }

    darFeadbeck () {
        return `Quem hambúrguer delicioso`
    }
}


const restaurenteFastFood = new RestaurenteFastFood()
console.log(restaurenteFastFood);
console.log(restaurenteFastFood.fazerPedito());
console.log(restaurenteFastFood.darFeadbeck());






class Modelarcarro {
    constructor() {
        this.modelo = "Corsa"
        this.ano = 2012
        this.status = "Seminovo"
        this.caracteristicas = ["Muito ecobómico", "Ótimo carro"]
        this.combustiveis = ["Gasolina", "Etanol"]
        this.combutivelPrincipal = "GAsolina"
        this.flex()
    }

    flex () {
        if (this.combustiveis.length > 1) {
            this.flex = true
        }
    }

    abastecer() {
        return `${this.modelo} Abastcedico com sucesso! Só voarrr`
    }

    calibrarPneus() {
        return `Todos os pneus foram calibrados com sucesso`
    }

    ouvirMusica() {
        let musica = prompt("Escolher Música: ")
        return `Musica atual: ${musica}`
    }


    concertar() {
        return `Carro concertado com sucesso! Tenha mais cuidados`
    }
}


const carro = new Modelarcarro()
console.log(carro);
console.log(carro.flex);
console.log(carro.abastecer());
console.log(carro.calibrarPneus());
console.log(carro.ouvirMusica());
console.log(carro.concertar());