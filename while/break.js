const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for(let numero of numeros){
    if (numero === 2 || numero === 5) {
        console.log(`pulei o ${numero}`)
        continue; //pula para prox iteracao do laco
    }
    
    if (numero === 7){
        break; //sai do laco
    }
    console.log(numero)
};