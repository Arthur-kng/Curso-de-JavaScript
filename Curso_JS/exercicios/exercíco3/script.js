function contando() {
    inicio = document.getElementById('ini')
    fim = document.getElementById('fim')
    passo = document.getElementById("pas")
    res = document.querySelector("div.res")
    i = Number(inicio.value)
    p = Number(passo.value)
    f = Number(fim.value)
    if (inicio.value.length == 0 || fim.value.length == 0) {
        res.innerHTML= `<strong> IMPOSSÍVEL CONTAR!</strong>`
        window.alert("[ERRO] Verifique se todos os campos foram preenchidos")
    } else if (passo.value.length == 0 || passo.value == 0) {
        window.alert(`[ERRO] Passo Invalido considerando passo como 1`)
        p = 1
        res.innerHTML = `${i} `
        i = i + p
        while (i <= f) {
            res.innerHTML += `\u{1F449} ${i}`
            i = i + p
        }
        res.innerHTML += `\u{1F449} \u{1F3C1}`
    } else if (f < i && p >= 0) {
        p = p * (-1)
        res.innerHTML = `${i} `
        i = i + p
        while (f <= i) {
            res.innerHTML += `\u{1F449} ${i}`
            i = i + p
        }
        res.innerHTML += `\u{1F449} \u{1F3C1}`
    } else if (p < 0) {
        res.innerHTML = `${i} `
        i = i + p
        while (f <= i) {
            res.innerHTML += `\u{1F449} ${i}`
            i = i + p
        }
        res.innerHTML += `\u{1F449} \u{1F3C1}`
    } else {
        res.innerHTML = `${i} `
        i = i + p
        while (i <= f) {
            res.innerHTML += `\u{1F449} ${i}`
            i = i + p
        }
        res.innerHTML += `\u{1F449} \u{1F3C1}`
    }
}