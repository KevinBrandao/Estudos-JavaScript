// Função em JS first-class object (Citizens)
// Higher-order function

// criar de forma literal
function func1() {}

// armazenar em uma variavel 
const fun2 = function () {}

//armazenar em um array
const array = [function (a, b) { return a + b}, func1, fun2]
console.log(array[0] (2, 3))

// armazenar em um atributo de objeto
const obj = {} 
obj.falar = function () { return 'Opa'}
console.log(obj.falar())

// Passar função como paramentro
function run(fun) {
    fun()
}
run(function () { console.log('Executando...') })

// Uma função pode retornar/conter um função
function soma(a, b) { 
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2, 3) (4);