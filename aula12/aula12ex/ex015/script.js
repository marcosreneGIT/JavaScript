function verificarIdade(){
    var dataAtual = new Date()
    var anoAtual = dataAtual.getFullYear()

    var imagem = window.document.getElementById('pessoa')
    var result = window.document.getElementById('result')
    var txtAnoNasc = window.document.getElementById('data_nasc')
    var anoNasc = Number(txtAnoNasc.value)

    if (txtAnoNasc.value.length == 0 || txtAnoNasc.value > anoAtual ){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }
    else {
        var idade = anoAtual - anoNasc
        var idsex = document.getElementsByName('sex')
        var genero = ''

        if(idsex[0].checked){
            genero = 'Masculino'
        }
        else if(idsex[1].checked){
            genero = 'Feminino'
        }
        result.innerHTML = `Detectamos gênero: ${genero}. <br>Idade: ${idade} anos.<br>Refere-se: `

        if(idade > 0 && idade <= 4){
            if(genero == 'Masculino'){
                imagem.src = 'imgs/m-bebe.jpg'
            }
            else{
                imagem.src = 'imgs/f-bebe.jpg'
            }
            result.innerHTML += 'Bebê.'
        }
        else if(idade <= 10){
            if(genero == 'Masculino'){
                imagem.src = 'imgs/m-criança.jpg'
            }
            else{
                imagem.src = 'imgs/f-criança.jpg'
            }
            result.innerHTML += 'Criança.'
        }
        else if(idade <= 18){
            if(genero == 'Masculino'){
                imagem.src = 'imgs/m-adolescente.jpg'
            }
            else{
                imagem.src = 'imgs/f-adolescente.jpg'
            }
            result.innerHTML += 'Adolescente.'
        }
        else if(idade <= 45){
            if (genero == 'Masculino'){
                imagem.src = 'imgs/m-adulto.jpg'
            }
            else{
                imagem.src = 'imgs/f-adulto.jpg'
            }
            result.innerHTML += 'Adulto'
        }
        else if(idade <= 60){
            if (genero == 'Masculino'){
                imagem.src = 'imgs/m-meia.jpg'
             }
        else{
            imagem.src = 'imgs/f-meia.jpg'
        }
            result.innerHTML += 'Meia Idade'
        }
        else if(idade <= 133){
            if (genero == 'Masculino'){
                imagem.src = 'imgs/m-idoso.jpg'
            }
            else{
                imagem.src = 'imgs/f-idoso.jpg'
            }
            result.innerHTML += 'Idoso'
        }
        else{
            imagem.src = 'imgs/m-bebe.jpg'
            result.innerHTML = 'Tenho certeza que esta não é sua idade real. '
        }
    }
}