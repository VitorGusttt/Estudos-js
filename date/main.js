const data = new Date();
console.log('Dia', data.getDate());
console.log('Mes', data.getMonth() + 1); //aqui tem q adc 1 pq cmc no 0. 0 eh janeiro
console.log('Ano', data.getFullYear());

const diaSemana = ['Domingo', 'Segunda-feira', 'Terca-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sabado'];

const getDiaSemana = data.getDay(); 
console.log('Dia da semana:', diaSemana[getDiaSemana]);
