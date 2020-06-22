var Num = document.getElementById('num')
lista = document.querySelector('select#txtl')
let res = document.querySelector('div.res')
let valores = []
x=0

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n,l) {
    if (l.indexOf(Number(n)) == -1) {
        return true
    } else {
        return false
    }

}

function adicionar(){
    if(isNumero(Num.value) && inLista(Num.value,valores) ){
        x++
        valores.push(Number(Num.value))
        let item= document.createElement('option')
        item.text= `Valor ${Num.value} adicionado`
        item.value= `pos${x}`
        lista.appendChild(item)
        res.innerHTML = ""
    }else{
        alert('Valor inválido ou já encontrado na lista!')
    }
    Num.value =''
    Num.focus()
}
function finalizar(){
    if(valores.length == 0){
        alert('Adicione valores antes de finalizar!')
    }else{
        let tot= valores.length
        let maior= valores[0]
        let menor= valores[0]
        soma= 0
        media= valores[0]
        for(let pos in valores){
            soma += valores[pos]
            
            if(valores[pos]> maior){
                maior = valores[pos]
            } else if( menor> valores[pos]){
                menor=valores[pos]
            }
        }
        media = soma/tot
        res.innerHTML = ""
        res.innerHTML += `<p>Ao todo temos ${tot} elementos<p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}<p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}<p>`
        res.innerHTML += `<p>A soma dos elementos é ${soma}<p>`
        res.innerHTML += `<p>A média dos elemntos é ${media}<p>`
    }
}