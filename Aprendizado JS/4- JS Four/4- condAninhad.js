var idade = 65
console.log(`Você tem ${idade} anos.`)
if (idade < 18) {
    if (idade >= 16) {
        console.log('Menor de idade, voto opcional.')
    } else {
        console.log('Proibido votar!')
    }
} else {
    if (idade < 65) {
        console.log('Voto obrigatório!')
    } else {
        console.log('Idoso, voto opcional.')
    }
}