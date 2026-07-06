const bloco = document.getElementById('bloco')
let msg = document.getElementById('msg')
let img = document.getElementById('img')
let relogio = document.getElementById('relogio')

function Carregar() {

    let agora = new Date()
    let horas = agora.getHours()
    let minutos = agora.getMinutes().toString().padStart(2, '0')
    let segundos = agora.getSeconds().toString().padStart(2, '0')

    let tempoAtual = `${horas}:${minutos}:${segundos}`
    relogio.textContent = tempoAtual


    // Lógica do período do dia
    if (horas >= 5 && horas < 12) {
        //Bom Dia
        msg.innerHTML = '<br><b><i>Bom dia!</i></b>'
        img.src = 'images/morning.jpg'
        document.body.style.background = "linear-gradient(-135deg, #4C3625, #76521c)"
        bloco.style.background = "#20160f"
    
    }else if (horas >= 12 && horas <= 16) {
        //Boa tarde
        msg.innerHTML = '<br><b><i>Boa tarde!</i></b>'
        img.src = 'images/afternoon.jpg'
        document.body.style.background = "linear-gradient(-135deg, #2d5252, #283b4d)"
        bloco.style.background = "#040c12"

    }else if (horas > 16 && horas <= 18) {
        //Bom fim de tarde
        msg.innerHTML = '<br><b><i>Bom fim de tarde!</i></b>'
        img.src = 'images/evening.jpg'
        document.body.style.background = "linear-gradient(-135deg, #976e5a, #2b1a1d)"
        bloco.style.background = "#150e16"
    }
    else {
        //Boa noite
        msg.innerHTML = '<br><b><i>Boa noite!</i></b>'
        img.src = 'images/night.jpg'
        document.body.style.background = "linear-gradient(-135deg, #494963, #161635)"
        bloco.style.background = "#01011c"
    }
}

// Executa a cada 1 segundo
setInterval(Carregar, 1000)

// Executa imediatamente ao carregar
Carregar()