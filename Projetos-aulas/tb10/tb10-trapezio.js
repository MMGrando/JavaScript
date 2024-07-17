function areaTrapezio() {
    let valor1 = document.getElementById('primeiroValor')
    let valor2 = document.getElementById('segundoValor')
    let valor3 = document.getElementById('terceiroValor')
    let result1 = document.getElementById('result0')

    let img = document.createElement('img'); //OBS criar elemento 'img' para usar .setAttribute
    img.setAttribute('id', 'foto')
    img.setAttribute('src', '1trapezio.png')
    result1.innerHTML = ''

    if (valor1.value.length==0 || valor2.value.length==0 || valor3.value.length==0){
        window.alert('[ERRO] ao tentar calcular a Àrea do Trapézio!!\nATENÇÃO: Preencher todas as informações!')
        img.setAttribute('src', '1trapezio.png')
        result1.appendChild(img).innerHTML
        result1.innerHTML += `<br><br> Preencha à esquerda para <br><br> calcular a área desejada!`
    } else {
        let b = Number(valor1.value)
        let B = Number(valor2.value)
        let h = Number(valor3.value)
        let area = (b+B)/2*h

        img.setAttribute('src', '1trapezio.png')
        result1.appendChild(img).innerHTML
        result1.innerHTML += `<br><br>A área do trapézio é: <br><br> (${b} + ${B}) / 2 x ${h} = <strong>${area}</strong>!`
    }
}





