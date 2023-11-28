let num = document.getElementById('num')
let tab = document.getElementById('tab')
let res = document.getElementById('res')
let numeros = []  


function adicionar(){
    if (isNumber(num.value) && !inList(num.value, numeros)){
        numeros.push(Number(num.value))

        let item = document.createElement('option')
        item.text = `Valor: ${num.value}`
        tab.appendChild(item)
        res.innerHTML = ''
    }
    else{
        window.alert('Valor inválido ou já adicionado a lista.')
    }
    num.value = ''
    num.focus()

}

function isNumber(n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    }
    else{
        return false
    }
}
function inList(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    }
    else{
        return false
    }

}

function finalizar(){
    if (numeros.length == 0){
        window.alert('Adicione valores antes de finalizar!')
    }
    else{
        let tot = numeros.length
        let max = numeros [0]
        let min = numeros [0]
        let sun = 0
        let med = 0

        for (let i in numeros){
            sun += numeros[i]
            if (numeros[i] > max){
                max = numeros[i]
            }
            if (numeros[i] < min){
                min = numeros[i]
            }
        }
        med = sun / numeros.length

        res.innerHTML = ''
        res.innerHTML += `<p>Maior número: ${max}</p>`
        res.innerHTML += `<p>Menor número: ${min}</p>`
        res.innerHTML += `<p>Total de números: ${tot}</p>`
        res.innerHTML += `<p>Soma total: ${sun}</p>`
        res.innerHTML += `<p> Média: ${med}`
        num.focus()

    }

}