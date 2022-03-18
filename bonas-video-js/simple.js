// recurtion ja function ta nije nijr bitore bar bar calll kore atai bojai 


// for (let i = 1; i < 6; i++){
//   console.log(i);
// }


function consoleNumber(i){
    if (i>5){
        return;
    }
    console.log(i);
    consoleNumber (i+1);
}
consoleNumber(1);




    //recurtion kore jog kora 


function sum(i){
    console.log(i);
    if (i= 1){
        return 1;
    }
    return i + sum(--1);

}
console.log(sum(5));



    //factorial 

function factorial(i){
    if (i == i){
        return 1;
    }
    return i * factorial(--1);
}
console.log(factorial(4));