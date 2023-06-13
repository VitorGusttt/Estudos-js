function criaCalc(){
    //metodos vao para baixo, atributos para cima
    return {
        //atributos
        display: document.querySelector('.display'),


        //metodos
        inicia(){
            this.clickBtn();
            this.pressionaEnter();
        },

        clickBtn(){
            document.addEventListener('click',(e) => {
                const el = e.target; //verificamos aonde estou clicando
                if (el.classList.contains('btn-num')){
                    this.adicionaBtnDisplay(el.innerText)
                };

                if(el.classList.contains('btn-clear')){
                    this.limpaDisplay()
                };

                if(el.classList.contains('btn-del')){
                    this.apagaUm()
                };

                if(el.classList.contains('btn-eq')){
                    this.realizaConta()
                };
            })//usamos uma arrow functon para n alterarmos o this
        },

        adicionaBtnDisplay(valor){
            this.display.value += valor; 
        },

        limpaDisplay(){
            this.display.value = '';
        },

        apagaUm(){
            this.display.value = this.display.value.slice(0, -1)
        },

        realizaConta(){
            try{
                equacao = eval(this.display.value)

                if (!equacao){
                    alert('erro')
                    this.limpaDisplay()
                    return; //se der erro ja sai do laco
                }

                this.display.value = equacao;
            }
            catch(err){
                alert('erro')
                this.limpaDisplay()
            };
        },

        pressionaEnter(){
            document.addEventListener('keyup', (e) => {
                if (e.keyCode === 13){this.realizaConta();};
            })
        }
    };
}

const calculadora = criaCalc()
calculadora.inicia()