
function receberDados() {
    let peso = Number(document.getElementById('peso').value)
    let altura = Number(document.getElementById('altura').value)

    if (!peso) {
        let conteudo = document.getElementById('container')
        conteudo.innerHTML = ''
        let h1 = document.createElement('h1')
        h1.innerHTML = 'Coloque um peso válido!'
        let btn = document.createElement('button')
        btn.innerHTML = 'Voltar'
        btn.classList.add('botao-resultado')
        conteudo.appendChild(h1)
        conteudo.appendChild(btn)
        btn.onclick = function () {
            window.location.reload()
        }
    } else if (!altura) {
        let conteudo = document.getElementById('container')
        conteudo.innerHTML = ''
        let h1 = document.createElement('h1')
        h1.innerHTML = 'Coloque uma altura válida!'
        let btn = document.createElement('button')
        btn.innerHTML = 'Voltar'
        btn.classList.add('botao-resultado')
        conteudo.appendChild(h1)
        conteudo.appendChild(btn)
        btn.onclick = function () {
            window.location.reload()
        }

    } else {

        let imc = calculaIMC(peso, altura)
        let nivel = calcularNivel(imc)
        mostrarResultado(imc, nivel)


        function calculaIMC(peso, altura) {
            let IMC = peso / (altura * altura)
            return IMC.toFixed(2)
        }

        function calcularNivel(imc) {
            if (imc < 18.5) {
                let resultado = 'Abaixo do peso'
                return resultado
            } else if (imc > 18.5 && imc < 24.9) {
                let resultado = 'Peso normal'
                return resultado
            } else if (imc > 25 && imc < 29.9) {
                let resultado = 'Sobrepeso'
                return resultado
            } else if (imc > 30 && imc < 34.9) {
                let resultado = 'Obesidade grau 1'
                return resultado
            } else if (imc > 35 && imc < 39.9) {
                let resultado = 'Obesidade grau 2'
                return resultado
            } else if (imc > 40) {
                let resultado = 'Obesidade grau 3'
                return resultado
            }
        }

        function mostrarResultado(imc, nivel) {
            let conteudo = document.getElementById('container')
            conteudo.innerHTML = ''
            let h1 = document.createElement('h1')
            let p = document.createElement('h4')
            let btn = document.createElement('button')
            btn.classList.add('botao-resultado')
            h1.innerHTML = 'Resultado!'
            p.innerHTML = `Seu IMC é: ${imc}<br>`
            p.innerHTML += `Seu nível é: ${nivel}`
            btn.innerHTML = 'Voltar'
            conteudo.appendChild(h1)
            conteudo.appendChild(p)
            conteudo.appendChild(btn)

            btn.onclick = function () {
                window.location.reload()
            }
        }
    }
}
