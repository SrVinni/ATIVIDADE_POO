class Retangulo{
    constructor(altura,largura){
        this.altura = altura
        this.largura = largura
    }
    calcularArea(){
        return this.altura*this.largura
    }
    Area(){
    return this.calcularArea()
    }
}

let retangulo_1 = new Retangulo(10,10)
let retangulo_2 = new  Retangulo(17,25)

console.log(retangulo_1.calcularArea())
console.log(retangulo_2.calcularArea())

