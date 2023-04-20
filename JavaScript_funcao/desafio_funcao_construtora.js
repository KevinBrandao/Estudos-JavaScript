function Pessoa(nome) {
    this.nome = nome;

    this.falar = function() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('Kevin')
p1.falar()