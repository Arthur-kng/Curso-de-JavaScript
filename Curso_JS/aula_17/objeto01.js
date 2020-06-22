let amigo= {nome: 'José', 
sexo: 'M', 
peso: 84.5,
engordar(p=0){
    console.log('engordou')
    this.peso += p
}}
console.log(amigo)
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)