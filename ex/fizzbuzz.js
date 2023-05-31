function fizzBuzz (num){
    if (num % 3 === 0 && num % 5 === 0){
        return 'FizzBuzz'
    }

    if (num % 5 === 0){
        return 'Buzz'
    }

    if (num % 3 === 0){
        return 'Fizz'
    }

    if (isNaN === true){
        return num
    }

    else {
        return num
    }
}

for (let i = 0 ; i <= 100 ; i++){
    console.log(i, fizzBuzz(i))        
}