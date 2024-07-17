function retangulo() {
    let wValor = document.getElementById('retanguloLargura')
    let lValor = document.getElementById('retanguloAltura')
    let result = document.getElementById('result5')

    let img = document.createElement('img')
    img.setAttribute('id', 'foto')
    img.setAttribute('src', '6retangulo.png')

    result.innerHTML = ''

    if (wValor.value.length==0 || lValor.value.length==0) {
        alert('[ERRO] ao tentar calcular a Àrea do Retângulo!!\nATENÇÃO: Preencher todas as informações!')
        img.setAttribute('src', '6retangulo.png')
        result.appendChild(img).innerHTML
        result.innerHTML += `<br><br> Preencha à esquerda para <br><br> calcular a área desejada!`
    } else {
        let w = Number(wValor.value)
        let l = Number(lValor.value)
        let area = w*l

        img.setAttribute('src', '6retangulo.png')
        result.appendChild(img).innerHTML
        result.innerHTML += `<br><br>A área do retângulo é: <br><br> ${w} x ${l} = <strong>${area}</strong>!`
    }
}