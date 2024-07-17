function calcular () {
    let valort = document.getElementById('tde') //valor
    let quantot = document.getElementById('taté') //até quanto
    let result0 = document.getElementById('result0')
    let tcaixa = document.getElementById('tcaixa')

    result0.innerHTML = 'Resultado da tabuada: <br>'
    let v = Number(valort.value)
    let q = Number(quantot.value)
    let calcule1 = document.getElementsByName('calcule')
    tcaixa.innerHTML = '' //faz com que limpe sempre que clicar num novo cálculo, sem isso vai acumular cálculos anteriores na caixa    

    if (valort.value.length == 0 || quantot.value.length == 0) {
        window.alert('[ERRO]Espaço deixado em branco!')
    } else if (calcule1[0].checked) {
        for (let i=0;i<=q;i++) {
            let options = document.createElement('option')
            options.text += (`${v}x${i} = ${v*i}`)
            tcaixa.appendChild(options)
        } 
    } else if (calcule1[1].checked) {
        for (let i=0;i<=q;i++) {
            let options = document.createElement('option')
            options.text += (`${v}/${i} = ${(v/i).toFixed(2).replace('.', ',')}`)
            tcaixa.appendChild(options)
        }
    } else if (calcule1[2].checked) {
        for (let i=0;i<=q;i++) {
            let options = document.createElement('option')    
            options.text += (`${v}+${i} = ${v+i}`)
            tcaixa.appendChild(options)
        }
    } else if (calcule1[3].checked) {
        for (let i=0;i<=q;i++) {
            let options = document.createElement('option')           
            options.text += (`${v}-${i} = ${v-i}`)
            tcaixa.appendChild(options)
        }
    }
} //result0.innerHTML += (`${v}x${i} = ${v*i} <br>`) [código sem o elemento 'option'] 