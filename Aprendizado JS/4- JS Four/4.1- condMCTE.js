var idade = 15
console.log(`Você tem ${idade} anos.`)
if (idade >= 0 && idade <16) {
    console.log('Proibido votar!')
} else if (idade >= 16 && idade < 18) {
    console.log('Menor de idade, voto opcional.')
} else if (idade >= 18 && idade < 65) {
    console.log('Voto obrigatório!')
} else if (idade >= 65) {
    console.log('Idoso, voto opcional.')
} 