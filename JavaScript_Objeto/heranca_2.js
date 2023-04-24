// Cadeia de prototipos (prototype chain)
const avo = { attr1: 'A'};
const pai = { __pronto__: avo, attr2: 'B'};
const filho = { __pronto__: pai, attr3: 'C'}
console.log(filho.attr1);

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual +  delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`; 
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 342 //shadowing
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

