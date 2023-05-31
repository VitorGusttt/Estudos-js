const frutas = ['Pera', 'Banana', 'Uva'];
const pessoa = {
    nome:'Vitor',
    sobrenome:'Freitas',
    idade: 17
};

//percorre o array. le os index
for (let i in frutas) {
    console.log(i)
}

for(let chaves in pessoa){
    console.log(chaves);
    console.log(pessoa[chaves]);
}