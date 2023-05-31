//funcao q recebe 2 numeros e mostra oi maior

function maiorQue(num1 , num2){
    if (num1 > num2){
        return num1
    }
    else if (num1 === num2){
        return 'Os numeros sao iguais'
    }
    else{
        return num2
    }
};

console.log(maiorQue(1, 0))