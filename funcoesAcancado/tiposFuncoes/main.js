//padrao das padroes, functions declaradas assim ocorre o hoisting. Assim eleva todas as functions para o topo do arquivo
function falaOi(){
    console.log('oi')
};
falaOi()

//first-class-obj. function expression. Quando uma variavgel recebe uma function. Trata funcoes como dado

const souUmDado = function(){
    console.log('sou um dado')
};

souUmDado()

//arrow function. basicamente uma function expression resumida
const arrowFunction = () =>{
    console.log('arrow function')
};

arrowFunction()

//function dentro de obj
const objeto = {
    falar(){
        console.log('estou dentro do obj');
    },

    Tchau(){
        console.log('tchau')
    }

};

objeto.falar()
objeto.Tchau()

//