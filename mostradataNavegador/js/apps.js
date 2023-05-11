//pego elemento do document
const textoData = document.querySelector("#data");
//pego obj date
const data = new Date();

function formataData(data){
    //meses
    const nomeMesAno = ['Janeiro', 'Fevereiro', 'Marco', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    //dias
    const nomesDiasSemana = ['Domingo', 'Segunda-feira', 'Terca-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sabado'];

    //se o num for menor que 10 coloca um zero a esquerda
    function zeroEsquerda(num){
        return num >= 10 ? num : `0${num}`
    };

    const min = zeroEsquerda(data.getMinutes());
    const horas = zeroEsquerda(data.getHours());
    const ano = data.getFullYear();
    const diaMes = zeroEsquerda(data.getDate());
    const diasSemana = nomesDiasSemana[data.getDay()];
    const mesAno = nomeMesAno[data.getMonth()];
    
    const dataAtual = `${diasSemana}, ${diaMes} de ${mesAno} de ${ano}. <br> ${horas}:${min}`;
    
    return dataAtual
};

const dataAtual = formataData(data);

textoData.innerHTML = dataAtual;

