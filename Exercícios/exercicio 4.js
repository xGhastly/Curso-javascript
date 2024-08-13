// Retornar a menor palavra encontrada. Em caso de empate, retornar a primeira.

let palavra1 = 'arroz'
let palavra2 = 'abobora'

function retornarMenor(palavra1, palavra2) {

    let palavra1lenght = palavra1.length
    let palavra2lenght = palavra2.length
    if (palavra1lenght < palavra2lenght) {
        return palavra1
    } else if (palavra1lenght > palavra2lenght) {
        return palavra2       
    } else if (palavra1lenght = palavra2lenght) {
        return palavra1     
    }
}

console.log(retornarMenor(palavra1, palavra2))


