function paralelogramo(){
    let valorBase = document.getElementById('paraleloBase')
    let valorAltura = document.getElementById('paraleloAltura')
    let result = document.getElementById('result3')
    
    let img = document.createElement('img');
    img.setAttribute('id', 'foto')
    img.setAttribute('src', '4paralelo.png')

    result.innerHTML = ''

    if (valorBase.value.length==0 || valorAltura.value.length==0) {
        alert('[ERRO] ao tentar calcular a Àrea do Paralelogramo!!\nATENÇÃO: Preencher todas as informações!')
        img.setAttribute('src', '4paralelo.png')
        result.appendChild(img).innerHTML
        result.innerHTML += `<br><br> Preencha à esquerda para <br><br> calcular a área desejada!`
    } else {
        let b = Number(valorBase.value)
        let h = Number(valorAltura.value)
        let area = b*h

        img.setAttribute('src', '4paralelo.png')
        result.appendChild(img).innerHTML
        result.innerHTML += `<br><br>A área do círculo é: <br><br> ${b} x ${h} = <strong>${area}</strong>!`
    }

}