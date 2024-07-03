var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são ${hora} horas!`)
if (hora >= 7  && hora <= 17) {
    if (hora < 12) {
        console.log('Bom dia!') 
    } else {
        console.log('Boa tarde!')
    }
} else {
    if (hora >= 18 && hora <= 23) {
    console.log('Boa noite!')
    } else {
        console.log('Boa madrugada!')
    }
}