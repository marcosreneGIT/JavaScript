function informarHorario(){

    var data = new Date()
    var hora = 22 //data.getHours()

    var txtHora = window.document.getElementById('txt')
    var imagem = window.document.getElementById('img')
    
    txtHora.innerHTML = `Agora são precisamente ${hora} horas.`
    if (hora >= 5 && hora <= 12){
        imagem.src = 'imgs/ft-manha.png'
        document.body.style.background = '#FEE355'
    }
    else if (hora > 12 && hora < 18){
        imagem.src = 'imgs/ft-tarde.png'
        document.body.style.background = '#FD8A08'

    }
    else{
        imagem.src = 'imgs/ft-noite.png'
        document.body.style.background = '#53414A'

    }
}
