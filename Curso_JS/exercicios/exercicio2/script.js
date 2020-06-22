function carregar(){
    res=document.querySelector('div#res')
    var data= new Date()
    ano= data.getFullYear()
    fano= document.getElementById('txtnum')

    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[Erro!] Verifique os Dados')
    }else{
        var sex= document.getElementsByName('txtsex')
        var idade= ano- Number(fano.value)
        var imagem= document.createElement('img')
        imagem.setAttribute('id','foto')
        gênero =''
        if(sex[0].checked){
            gênero='Homem'
            if(idade>0 && idade<=13){
                imagem.setAttribute('src','menino1.jpg')
            }else if(idade>13 && idade<=21){
                imagem.setAttribute('src','jovem.jpg')
            }else if(idade>20 && idade<=65){
                imagem.setAttribute('src','homem.jpg')
            }else{
                imagem.setAttribute('src','idoso.jpg')
            }
        }else if(sex[1].checked){
            gênero='Mulher'
            if(idade>0 && idade<=13){
                imagem.setAttribute('src','menina.jpg')
            }else if(idade>13 && idade<=21){
                imagem.setAttribute('src','jovem_femea.jpg')
            }else if(idade>20 && idade<=65){
                imagem.setAttribute('src','mulher.png')
            }else{
                imagem.setAttribute('src','idosa.jpg')
            }
        }else{
            gênero='Pessoa'
            if(idade>0 && idade<=13){

            }else if(idade>13 && idade<=21){

            }else if(idade>20 && idade<=65){

            }else{

            }
        }
        res.innerHTML = `${gênero} vai ter ${idade} anos até o fim de dezembro de ${ano}`
        res.appendChild(imagem)
    }
}