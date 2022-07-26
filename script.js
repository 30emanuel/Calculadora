const res = document.getElementById('res')

function inserir(num){
    res.innerHTML += num
}
function limpar(){
    res.innerHTML = ''
}
function voltar(){
    var resultado = document.getElementById('res').innerHTML
    res.innerHTML = resultado.substring(0, resultado.length -1)
}
function calcular(){
    res.innerHTML = eval(res.innerHTML)
}