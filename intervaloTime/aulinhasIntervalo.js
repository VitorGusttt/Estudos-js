function retornaHoras(){
    data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

function mostraHoras(){
    console.log(retornaHoras())
}


//setInterval(mostraHoras, 10000) //configura um intervalo de tempo para q um a function seja executada.
//isso gera um loop, para paramos precisamos colocar isso em uma var e dar um ClearInterval


let timer = setInterval(mostraHoras, 1000)

//fiz uma funcao anonima q limpa o timer, que eh aonde esta contando, assim ele para. essa so exec uma vez  
setTimeout(() =>{
    clearInterval(timer)
}, 10000);
