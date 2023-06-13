//executada altomaticamente. (funcao(){})(). Escopos global n interfere
(function(idade, peso){

    const sobrenome = 'Otavio';

    function FalaNome(){
        const nome = 'luiz';
        console.log(nome + ' ' + sobrenome);
    };

    FalaNome()
    console.log(idade, peso)


})('22 anos', '82Kg');
