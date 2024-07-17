function contarpassos() {
    let largada0 = document.getElementById('largada')
    let destino0 = document.getElementById('destino')
    let passo0 = document.getElementById('passo')
    let result0 = document.getElementById('result')

    if (largada0.value.length == 0 || destino0.value.length == 0 || passo0.value.length == 0) {
        window.alert('[ERRO] Por favor, não deixe nada em branco!')
    } else {
        result0.innerHTML = 'Contando 🦶: <br>'
        let l = Number(largada0.value)
        let d = Number(destino0.value)
        let p = Number(passo0.value)
        if (p <= 0) {
            window.alert('Passo 0 é inválido, considerando passo sendo 1..')
            p = 1
        }
        if (l<d) {
            for(let c=l; c<=d; c+=p) {// (l<d) Contagem crescente, 'largada' de N menor c/ 'destino' p/ N maior.
                result0.innerHTML += `${c} >`
            }
        } else {
            for(let c=l; c>=d; c-=p) { // (l>d) Contagem regressiva, 'largada' de N maior c/ 'destino' p/ N menor.
                result0.innerHTML += `${c} >`
            }
        }   
        result0.innerHTML += `✔`
    }
}