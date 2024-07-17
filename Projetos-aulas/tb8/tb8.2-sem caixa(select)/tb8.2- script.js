function calcular () {
    let valort = document.getElementById('tde') //valor
    let quantot = document.getElementById('taté') //até quanto
    let result0 = document.getElementById('result0')

    result0.innerHTML = 'Resultado da tabuada: <br>'
    let v = Number(valort.value)
    let q = Number(quantot.value)
    let calcule1 = document.getElementsByName('calcule')

    if (valort.value.length == 0 || quantot.value.length == 0) {
        window.alert('[ERRO]Espaço deixado em branco!')
    } else if (calcule1[0].checked) {
        for (let i=0;i<=q;i++) {
            result0.innerHTML += (`${v}x${i} = ${v*i} <br>`)
        } 
    } else if (calcule1[1].checked) {
        for (let i=0;i<=q;i++) {
            result0.innerHTML += (`${v}/${i} = ${(v/i).toFixed(2).replace('.', ',')} <br>`)
        }
    } else if (calcule1[2].checked) {
        for (let i=0;i<=q;i++) {
            result0.innerHTML += (`${v}+${i} = ${v+i} <br>`)
        }
    } else if (calcule1[3].checked) {
        for (let i=0;i<=q;i++) {
            result0.innerHTML += (`${v}-${i} = ${v-i} <br>`)
        }
    }
} //result0.innerHTML += (`${v}x${i} = ${v*i} <br>`)