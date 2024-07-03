function areaBola() {
    let valor = document.getElementById('valorDoRaio')
    let result = document.getElementById('result1')

    let img = document.createElement('img'); //OBS criar elemento 'img' para usar .setAttribute
    img.setAttribute('id', 'foto')
    img.setAttribute('src', '2raioBola.png')

    result.innerHTML = ''

    if (valor.value.length==0) {
        alert('[ERRO] ao tentar calcular a Àrea do Círculo!!\nATENÇÃO: Preencher todas as informações!')
        img.setAttribute('src', '2raioBola.png')
        result.appendChild(img).innerHTML
        result.innerHTML += `<br><br> Preencha à esquerda para <br><br> calcular a área desejada!`
    } else {
        let r = Number(valor.value)
        let pi = Math.PI
        let area = (pi*r**2).toFixed(5).replace('.', ',')

        img.setAttribute('src', '2raioBola.png')
        result.appendChild(img).innerHTML
        result.innerHTML += `<br><br>A área do círculo é: <br><br> <strong>π</strong> x ${r}² = <strong>${area}</strong>!`
    }
}