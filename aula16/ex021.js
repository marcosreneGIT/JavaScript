function parImpar(num){
    if (num % 2 == 0){
        return 'Par'
    }
    else{
        return 'Impar'
    }
}
console.log(parImpar(23))


function soma(num1=0, num2=0){
    return num1 + num2
}
console.log(soma(3, 9))


var valor = function(x){
    return x * 2
}

console.log(valor(5))


function fatorial (numero){
    var soma = 1
    for (var i = numero; i > 0; i--){
        soma = soma * i
    }
    return soma
}

console.log(fatorial(5))