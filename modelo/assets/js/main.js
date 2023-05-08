//imc
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault()
    const peso = Number(document.querySelector("#peso").value);
    const altura = Number(document.querySelector("#altura").value);
    const btn = document.querySelector("#enviar");
    const resultadoImc = document.querySelector("#resultado");

    const contaImc = peso / (altura**2);
    if (isNaN(altura) == true){
        resultadoImc.style.color= "red";
        resultadoImc.innerHTML = `valores invalidos. Insira Numeros`

    }

    else{
        resultadoImc.style.color= "blue";

        if(contaImc <= 16.9){
            resultadoImc.innerHTML = `Resultado: ${contaImc.toFixed(2)} . Muito abaixo do peso.`
        }
        else if(contaImc >= 17 && contaImc <= 18.4){
            resultadoImc.innerHTML = `Resultado: ${contaImc.toFixed(2)} . Abaixo do peso`
        }
        else if(contaImc >= 18.5 && contaImc <= 24.9){
            resultadoImc.innerHTML = `Resultado: ${contaImc.toFixed(2)} . Peso Normal`
        }
        else if(contaImc >= 25 && contaImc <= 29.9){
            resultadoImc.innerHTML = `Resultado: ${contaImc.toFixed(2)} . Acima do peso`
        }
        else if(contaImc >= 30 && contaImc <= 34.9){
            resultadoImc.innerHTML = `Resultado: ${contaImc.toFixed(2)} . Obesidade grau 1`
        }
        else if(contaImc >= 35 && contaImc <= 40){
            resultadoImc.innerHTML = `Resultado: ${contaImc.toFixed(2)} . Obesidade grau 2`
        }
        else if(contaImc > 40){
            resultadoImc.innerHTML = `Resultado: ${contaImc.toFixed(2)} . Obesidade grau 3`
        };
    };



});