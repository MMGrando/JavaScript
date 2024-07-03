function carregar() {
    var msg1 = window.document.querySelector('div#msg0')
    var img1 = window.document.getElementById('img0')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    
    if (hora>=6 && hora<12) {
        msg1.innerHTML = `Bom dia! Agora são ${hora}:${minutos}.`
        img1.src = '1-manha.png'
        document.body.style.background = '#0b7ca3'
    } else if (hora>=12 && hora<18) {
        msg1.innerHTML = `Boa tarde! Agora são ${hora}:${minutos}.`
        img1.src = '2-tarde.png'
        document.body.style.background = '#055672'
    } else if (hora>=18 && hora<=18) {
        msg1.innerHTML = `Lindo pôr do sol! Agora são ${hora}:${minutos}.`
        img1.src = '3-pordosol.png'
        document.body.style.background = '#183d51'
    } else if (hora>18 && hora<=23) {
        msg1.innerHTML = `Boa noite! Agora são ${hora}:${minutos}.`
        img1.src = '4-noite.png'
        document.body.style.background = '#112c3c'
    } else if (hora>=0 && hora<6) {
        msg1.innerHTML = `Boa madrugada! Agora são ${hora}:${minutos}.`
        img1.src = '5-madrugada.png'
        document.body.style.background = '#060e16'
    }
}