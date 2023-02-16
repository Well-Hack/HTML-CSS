function carregar() {
    var msgm = document.getElementById("msg")
    var img = document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()

    msgm.innerHTML = `Àgora são ${hora} horas e ${min} Minutos`

    if (hora >= 0 && hora < 12){

        img.src = "Imagens/manhãcity.jpg"
        document.body.style.background = "#A5DDF0"

    }else if(hora >= 12 && hora < 18){

        img.src = "Imagens/sunset.jpg"
        document.body.style.background = "#F0A250"

    }else{
        img.src = "Imagens/noitecity.jpg"
        document.body.style.background = "#0012DB"
        
    }

}