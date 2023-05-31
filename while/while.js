// let numeroCond = 0;
// while(numeroCond <= 10){
//     console.log(numeroCond);
//     numeroCond++
// }


function random (min,max){
    const r = Math.random() * (max - min) + min
    return Math.floor(r)
};

let rand = random(0,50);

while (rand !== 10){
    console.log(rand);
    rand = random(0, 50);
};
