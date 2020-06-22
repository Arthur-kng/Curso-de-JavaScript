function calculo(){
    var Num = window.document.getElementById('num')
    let res = document.getElementById('seltab')
    num = Number(Num.value)
    if(Num.value.length == 0){
        alert('Por favor, digite um número')
    }else{
        res.innerHTML = ""
        for(x=0;x<11;x++){
            var item = document.createElement('option')
            item.text= `${num} X ${x}= ${num*x}`
            item.value= `tab${x}`
            res.appendChild(item)
        }
    }
}