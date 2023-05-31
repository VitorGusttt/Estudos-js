const nome = ['Vitor Freitas', 'Lucas Cleyton', 'Felipe Moreira'];

//qunado tem obj iteravceis usa o of
for (let valor of nome){
    console.log(valor)
}


//temos tbm o foreach
nome.forEach(function (valor, indice){
    console.log(valor, indice)
})