function retornaHora(data){
    //se n for uma instancia de Date
    if (data && !(data instanceof Date)){
        throw new TypeError('Esperando uma Data');
    }

    if (!data){
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'

    });
}


try{
    let data = retornaHora();
    console.log(data);
}
catch (err){
    console.log('Ocorreu um erro')
}
finally{
    console.log('tenha um Bom Dia')
}
