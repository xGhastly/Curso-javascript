let container = document.getElementById('container-h1')
container.innerHTML = ''
data = new Date()

function getDiaSemana(diaSemana) {
    let diaDaSemana;

    switch (diaSemana) {
        case 0:
            diaDaSemana = 'Domingo'
            return diaDaSemana
        case 1:
            diaDaSemana = 'Segunda-feira'
            return diaDaSemana
        case 2:
            diaDaSemana = 'Terça-feira'
            return diaDaSemana
        case 3:
            diaDaSemana = 'Quarta-feira'
            return diaDaSemana
        case 4:
            diaDaSemana = 'Quinta-feira'
            return diaDaSemana
        case 5:
            diaDaSemana = 'Sexta-feira'
            return diaDaSemana
        case 6:
            diaDaSemana = 'Sabado'
            return diaDaSemana
    }
}

function getNumeroMes(diaMes) {
    let diaDoMes;

    switch (diaMes) {
        case 0:
            diaDoMes = 'Janeiro'
            return diaDoMes
        case 1:
            diaDoMes = 'Fevereiro'
            return diaDoMes
        case 2:
            diaDoMes = 'Março'
            return diaDoMes
        case 3:
            diaDoMes = 'Abril'
            return diaDoMes
        case 4:
            diaDoMes = 'Maio'
            return diaDoMes
        case 5:
            diaDoMes = 'Junho'
            return diaDoMes
        case 6:
            diaDoMes = 'Julho'
            return diaDoMes
        case 7:
            diaDoMes = 'Agosto'
            return diaDoMes
        case 8:
            diaDoMes = 'Setembro'
            return diaDoMes
        case 9:
            diaDoMes = 'Outubro'
            return diaDoMes
        case 10:
            diaDoMes = 'Novembro'
            return diaDoMes
        case 11:
            diaDoMes = 'Dezembro'
            return diaDoMes

    }
}
function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`
}

function criaData (data) {
    const diaSemana = data.getDay();
    const diaMes = data.getMonth();
    const nomeDia = getDiaSemana(diaSemana);
    const nomeMes = getNumeroMes(diaMes)    

    return `${nomeDia}, ${data.getDate()} de ${nomeMes}` +
    ` de ${data.getFullYear()}<br>` +
    `${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`
}

container.innerHTML = criaData(data)

// let container = document.getElementById('container-h1')
// data = new Date()
// container.innerHTML = data.toLocaleDataString('pt-BR', { dataStyle: 'full', timeStyle: 'short'})