function contar(){   
    var ini = window.document.getElementById('ini')
    var fin = window.document.getElementById('fin')
    var pas = window.document.getElementById('pas')
    var res = window.document.getElementById('res')

    if (ini.value.length == 0 || fin.value.length == 0 || pas.value.length == 0){
        window.alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Verifique os seus dados!'
    }
    else{
        res.innerHTML = 'Contando: <br><br>'
        i = Number(ini.value)
        f = Number(fin.value)
        p = Number(pas.value)

        if (p <= 0){
            window.alert('Passo invalido. Considerando [Passo: 1].')
            p = 1
        }
        if (i < f){
            for(var c = i; c <= f; c += p){
                res.innerHTML += ` ${c} >`
            }
        }
        else{
            for (var c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} >`
            }
        }
        res.innerHTML += ' Fim'
    }


}