function geraHora(segundos){
    let data = new Date(segundos * 1000)

    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    });
};


const relogio = document.querySelector('#relogio');
const iniciar = document.querySelector('#iniciar');
const pausar = document.querySelector('#pausar');
const zerar = document.querySelector('#zerar');

//preciso fazer um  relogio q conte os segundois minutos horas
//preciso pegar os clicks
let timer;
segundos = 0;
iniciar.addEventListener('click', () =>{
    timer = setInterval(()=>{
        relogio.innerHTML = `${geraHora(segundos)}`
        segundos++
    }, 1000)

    relogio.classList.remove('vermelho');
});

pausar.addEventListener('click', () => {
    clearInterval(timer);
    relogio.classList.add('vermelho');
});

zerar.addEventListener('click', () => {
    relogio.innerHTML = `${geraHora(0)}`;
    segundos = 0;

    relogio.classList.remove('vermelho');

});