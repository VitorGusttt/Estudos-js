//funcao q retorna obj

function criaPessoa(nome, sobrenome, peso, altura){
    return  {
        nome,
        sobrenome,
        fala(assunto){
            return `${nome} esta ${assunto}`
        },
        peso,
        altura,
        //o get faz a funcao fingir que eh um atributo
        get imc(){
            const indice = this.peso / (this.altura**2)
            return indice.toFixed(2)
        }
    };
}


console.log(criaPessoa('Vitor', 'Freitas', 82, 1.80).imc)