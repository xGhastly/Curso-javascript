function getTimeFromSeconds(segundos) {
    const data = new Date(segundos * 1000)
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    })
}


const timer = document.querySelector('.timer')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')
const retomar = document.querySelectorAll('.retomar')
let segundos = 0
let relogio

function startClock() {
    relogio = setInterval(function() {
        segundos++
        timer.innerHTML = getTimeFromSeconds(segundos)
    }, 1000)
}

iniciar.addEventListener ('click', function(event) {
    timer.classList.remove('pausado')
    iniciar.innerHTML = 'Iniciar'
    clearInterval(relogio);
    startClock()
})

pausar.addEventListener ('click', function(event) {
    clearInterval(relogio);
    timer.classList.add('pausado')  
    iniciar.innerHTML = "Retomar" 
})


zerar.addEventListener ('click', function(event) {
    timer.classList.remove('pausado')
    clearInterval(relogio);
    timer.innerHTML = '00:00:00'
    segundos = 0
})



