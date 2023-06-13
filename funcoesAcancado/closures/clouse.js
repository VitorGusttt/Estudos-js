function criaFuncao (){
    const nome = 'cleb';
    return function(){
        return nome
    }
}

const funcao = criaFuncao();

console.log(funcao())