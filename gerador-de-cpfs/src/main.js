import GeraCPF from './modules/GeraCPF'

const cpfGerado = document.querySelector('.cpf-gerado')
cpfGerado.innerHTML = '000.000.000-00'

import './assets/css/style.css'

let btn = document.querySelector('.btn')

btn.addEventListener('click', function () {
    const gera = new GeraCPF() 
    cpfGerado.innerHTML = gera.geraNovoCpf()
})

