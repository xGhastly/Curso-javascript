function meuEscopo(){
    const form = document.querySelector('.form')
    const resultado = document.querySelector('.resultado')
    const reset = document.querySelector('.reset')

    const pessoas = []

    function recebeEventoForm (evento) {
        evento.preventDefault()
        const nome = form.querySelector('.nome')
        const sobrenome = form.querySelector('.sobrenome')
        const peso = form.querySelector('.peso')
        const altura = form.querySelector('.altura')
        
        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        })
        
        console.log(pessoas)

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} pesa ${peso.value} kg e mede ${altura.value} metros.</p>`

        nome.value = ''
        sobrenome.value = ''
        peso.value = ''
        altura.value = ''
        
    }
    function resetarCampos (evento) {
        evento.preventDefault()
        resultado.innerHTML = ''
    }

    
    form.addEventListener('submit', recebeEventoForm,);
    reset.addEventListener('submit', resetarCampos)
    
}

meuEscopo()
