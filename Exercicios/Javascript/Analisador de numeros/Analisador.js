let num = document.querySelector('input#num')
let list = document.querySelector('select#tabela')
let res = document.querySelector('div#res')
let valor = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else{
        return false
    }
}

function inList(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }    
}

function add(){
    if(isNumero(num.value) && !inList(num.value, valor)){
        window.alert('Tudo OK!')
    }else{
        window.alert('Valor invalido ou já tem na lista')
    }
}