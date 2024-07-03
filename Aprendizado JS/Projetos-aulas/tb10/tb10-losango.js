function losango() {
    let dValor = document.getElementById('losangoDiagonal1')
    let Dvalor = document.getElementById('losangoDiagonal2')
    let result = document.getElementById('result4')

    let img = document.createElement('img')
    img.setAttribute('id', 'foto')
    img.setAttribute('src', '5losango.png')

    result.innerHTML = ''

    if (dValor.value.length==0 || Dvalor.value.length==0) {
        alert('[ERRO] ao tentar calcular a Àrea do Losango!!\nATENÇÃO: Preencher todas as informações!')
        img.setAttribute('src', '5losango.png')
        result.appendChild(img).innerHTML
        result.innerHTML += `<br><br> Preencha à esquerda para <br><br> calcular a área desejada!`
    } else {
        let d = Number(dValor.value)
        let D = Number(Dvalor.value)
        let area = d*D/2

        img.setAttribute('src', '5losango.png')
        result.appendChild(img).innerHTML
        result.innerHTML += `<br><br>A área do losango é: <br><br> ${d} x ${D} / 2 = <strong>${area}</strong>!`
    }
}