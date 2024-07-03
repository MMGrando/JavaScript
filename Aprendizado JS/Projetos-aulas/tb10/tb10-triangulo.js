function triangulo() {
    let bValor = document.getElementById('baseTriangulo')
    let hValor = document.getElementById('alturaTriangulo')
    let result = document.getElementById('result2')

    let img = document.createElement('img'); //OBS criar elemento 'img' para usar .setAttribute
    img.setAttribute('id', 'foto')
    img.setAttribute('src', '3triangulo.png')
    result.innerHTML = ''

    if (bValor.value.length==0 || hValor.value.length==0){
        alert('[ERRO] ao tentar calcular a Àrea do Triângulo!\nATENÇÃO: Preencher todas as informações!')
        img.setAttribute('src', '3triangulo.png')
        result.appendChild(img).innerHTML
        result.innerHTML += `<br><br> Preencha à esquerda para <br><br> calcular a área desejada!` 
    } else {
        let b = Number(bValor.value)
        let h = Number(hValor.value)
        let area = b*h/2

        img.setAttribute('src', '3triangulo.png')
        result.appendChild(img).innerHTML
        result.innerHTML += `<br><br>A área do triângulo é:<br><br>${b} x ${h} / 2 = <strong>${area}</strong>!`
    }
}