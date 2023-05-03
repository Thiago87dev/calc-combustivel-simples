var botao = document.querySelector('#btn')
botao.addEventListener('click', calcular)

function calcular(){
    var km = document.querySelector('#km')
    var litros = document.querySelector('#litros')
    var resultado = document.querySelector('#resultado')

    var km = Number(km.value)
    var litros = Number(litros.value)
    var calculo = km / litros
    resultado.value = calculo
}
