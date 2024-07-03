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
    if(l.indexOf(Number(n)!=-1)){
        return true
    } else {
        return false
    }
}

function addNum() {
    if(sefornum(num1.value) && !emLista(num1.value, valorAdd)){
        window.alert('ok')
    } else {
        window.alert('Valor inválido ou já adicionado!')
    }
}



/*
function addNum() {
    num2=num1
    function ParOuImpar(num2){
        if(num2%2==0) {
            result1.innerHTML = ('par')
        } else {
            result1.innerHTML = ('impar')
        }
    } 
}
*/
