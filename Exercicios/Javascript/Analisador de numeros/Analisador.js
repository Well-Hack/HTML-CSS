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
       valor.push(Number(num.value))
       let item = document.createElement("option")
       item.text = `Valor ${num.value} adicionado`
       list.appendChild(item)
       res.innerHTML=``
    }else{
        window.alert('Valor invalido ou já tem na lista')
    }
    num.value = ""
    num.focus()
}

function end(){
    if(valor.length == 0){
    window.alert('Adicione Algum valor')
    } else {
        let tot = valor.length
        let mai = valor[0]
        let men = valor[0]
        for(let pos in valor){
            
        }
        
        res.innerHTML =  ``
        res.innerHTML = `<p> Ao todo temos ${tot} números cadastrados. </p>`
    }
}