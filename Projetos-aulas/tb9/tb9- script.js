let num1 = document.getElementById('num0') //input p/ add nums
let caixanum1 = document.getElementById('caixanum') //select dos nums add
let result1 = document.getElementById('result0')
let valorAdd = []


function sefornum(n){
    if(Number(n)>=1 && Number(n)<=100){
        return true
    } else {
        return false
    }
}

function emLista(n, l){
    if(l.indexOf(Number(n))!=-1){
        return true
    } else {
        return false
    }
}

function addNum() {
    if(sefornum(num1.value) && !emLista(num1.value, valorAdd)){
        valorAdd.push(Number(num1.value))
        let item = document.createElement('option')
        item.text = `Valor ${num1.value} adicionado`
        caixanum1.appendChild(item)
        result1.innerHTML = ''
        num1.value = ''
        num1.focus()
    } else {
        window.alert('Valor inválido ou já adicionado!')
    }
}

function calcule(){
    if(valorAdd.length==0){
        window.alert('Adicione números antes de finalizar!')
    } else {
        let total = valorAdd.length
        caixa = valorAdd.slice().sort((a, b) => a - b)
        let maior = caixa[total-1]
        let menor = caixa[0]
        let soma = valorAdd.reduce((acc, num) => acc + num, 0);
        let media = (soma / total).toFixed(2);

        result1.innerHTML = '';
        result1.innerHTML += `<p>Você adicionou ${total} números na caixa</p>`;
        result1.innerHTML += `<p>O maior número adicionado foi o ${maior}</p>`;
        result1.innerHTML += `<p>O menor número adicionado foi o ${menor}</p>`;
        result1.innerHTML += `<p>A soma de todos os números é ${soma}</p>`;
        result1.innerHTML += `<p>A média dos números é ${media}</p>`;
    }
}

