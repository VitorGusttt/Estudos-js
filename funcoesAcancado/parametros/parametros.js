//tudo q vier dps do acumulador eh jogado em numeros
function conta(operador, acumulador, ...numeros){

    for (let acumular of numeros){
        if (operador === '+') acumulador+= acumular
        if (operador === '-') acumulador-= acumular
        if (operador === '*') acumulador*= acumular
        if (operador === '/') acumulador/= acumular
    }
    

    console.log(acumulador)
};
conta('-', 0, 10, 20 ,30, 4)