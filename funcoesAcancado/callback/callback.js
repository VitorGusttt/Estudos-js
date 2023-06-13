function criaNum(){
    let numerosaleatorios;
    return numerosaleatorios = Math.random(Math.floor()) * 3000
};

function f1(callback){
    setTimeout(function(){
        console.log('f1');
        if (callback) callback(); //se tiver a funciton callbackl, execute
    }, criaNum());
};

function f2(callback){
    setTimeout(function(){
        console.log('f2');
        if (callback) callback(); //se tiver a funciton callbackl, execute
    }, criaNum());
};

function f3(callback){
    setTimeout(function(){
        console.log('f3');
        if (callback) callback(); //se tiver a funciton callbackl, execute
    }, criaNum());
};


// //call back eh uma funcao q eh executada logo qunado a OUTRA ACABA
// f1(function(){
//     f2(function(){
//         f3(function(){
//             console.log('ola rapazes')
//         })
//     });
// });

f1(f1Callback);


function f1Callback(){f2(f2Callback)}; //qnd essa acabar chama a f2
function f2Callback(){f3(f3Callback)}; //qnd essa acabar chama a f3
function f3Callback(){console.log('oi')}; //da ola