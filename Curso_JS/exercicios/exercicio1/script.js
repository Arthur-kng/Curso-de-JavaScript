function carregar(){
var msg= document.querySelector("div#msg")
var img= document.getElementById('imagem')
var data= new Date()
var hora= data.getHours()

msg.innerHTML= `Agora são ${hora} horas`
if(hora >= 0 && hora <12){
    img.src = 'manha.png'
    document.body.style.background = "rgb(130, 130, 245)"
}else if(hora >=12 && hora <18){
    img.src= 'tarde.png'
    document.body.style.background ='rgb(221, 144, 56)'
    
}else {
    img.src= 'noite.png'
    document.body.style.background ='rgba(27, 17, 65, 0.788)'
}
}