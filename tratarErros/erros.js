// const existe = 'ola, eu existo';
// //tentar executar

// try{
//     console.log(naoExiste)
// }
// //se der erro faz isso
// catch (err) {
//     console.log('ish deu erro')
//     console.log(err) // mostra o bloco de erro
// }

function soma (x, y){
    if(isNaN(x) === true || isNaN(y) === true){
        throw new Error('x e y tem q ser numeros')
    }
    
    return x + y
}

try{
    console.log(soma(1, 2))
    console.log(soma(1, 'a')) //assim q detecta um erro ele para de tentar
    console.log(soma(1, 2))
    console.log(soma(1, 2))

}
catch(err){
    console.log('tem q ser numeros parceiro')
}
