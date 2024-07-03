function verificar() {
    var date = new Date()
    var year = date.getFullYear()
    var yform = document.getElementById('txtage0')
    var result1 = document.getElementById('result0')
    if (yform.value.length == 0 || Number(yform.value) > year) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var optsex1 = document.getElementsByName('optsex0');
        var age = year - Number(yform.value);
        var gender = `Qualquer coisa`
        var img = document.createElement('img'); img.setAttribute('id', 'foto')
        if (optsex1[0].checked && age<20) {
            gender = 'um jovem'
            img.setAttribute('src', '1 menino.png')
        } else if (optsex1[1].checked && age<20) {
            gender = 'uma jovem'
            img.setAttribute('src', '2 menina.png')
        } else if (optsex1[0].checked && age>=20 && age<60) {
            gender = `um homem`
            img.setAttribute('src', '3 homem.png')
        } else if (optsex1[1].checked && age>=20 && age<60) {
            gender = `uma mulher`
            img.setAttribute('src', '4 mulher.png')
        } else if (optsex1[0].checked && age >= 60) {
            gender = `um senhor`
            img.setAttribute('src', '5 idoso.png')
        } else if (optsex1[1].checked && age >= 60) {
            gender = `uma senhora`
            img.setAttribute('src', '6 idosa.png')
        }
        result1.innerHTML = `Detectamos ${gender} de ${age} anos.`
        result1.appendChild(img)
    }
}

