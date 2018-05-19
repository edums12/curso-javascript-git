/**
 * 
 * @param {number} numero1 
 * @param {number} numero2 
 * Função para somar dois números
 */
function soma(numero1, numero2){
    total = numero1 + numero2
    return total
}

/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @param {number} c 
 * 
 * Função para retornar os dois números resultantes de uma Bhaskara
 */
function bhaskara(a = 0, b = 0, c = 0) {
    let delta = (b * b) - (4 * a * c)

    if(delta < 0){
        delta *= -1
    }

    let baskaraMaior = (-b + Math.sqrt(delta)) / (2 * a)
    let baskaraMenor = (-b - Math.sqrt(delta)) / (2 * a)

    let resultado = {
        x1: Math.ceil(baskaraMaior),
        x2: Math.ceil(baskaraMenor)
    }

    return resultado
}

let multiplica = function(numero1, numero2){
    return (numero1 * numero2)
}

console.log(bhaskara(2, -8, 0))
console.log(soma(1, 2))
console.log(multiplica(2, 5))