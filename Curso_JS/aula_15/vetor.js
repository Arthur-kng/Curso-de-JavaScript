let valores=[8,7,1,9,5,3 ]
/*console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])*/

//.........
//jeito 2
/*for(c=0;c<=valores.length;c++){
    console.log(`a posição ${c} tem valor ${valores[c]}`)
}*/

//........................
//jeito mais simples
for(let pos in valores){
    console.log(`a posição ${pos} tem valor ${valores[pos]}`)
}
let cade = valores.indexOf(3)
if(cade == -1){
    console.log("O valor desejado não existe no array")
}else{
    console.log(`o número  está na posição ${cade}`)
}

