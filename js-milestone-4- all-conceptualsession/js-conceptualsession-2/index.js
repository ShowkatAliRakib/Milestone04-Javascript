var glass = "water";
console.log(glass);


var myName = "rakib";
console.log(myName);


date type ::

primitive date type 

1.string date type 

var fristName = "showkat";
var lastName = " ali rakib";
var fullName = fristName +" "+ lastName
console.log(fullName);


2. number data type 

30 this is intiger data typeof

30.0021541 this is fool data type


var age1 = 30;

var age2 = "40"; 

var sum = age1 + parseInt(age2);

console.log(sum);


           typeof diya sob golor data type chaeck korajai

          exmple: console.log(typeof number);

3.boolean data type

true false dekai

var number1 = 60;
var number2 = 70;

console.log( number1 == number2);

undefined data type 

var rollNumber;

console.log(rollNumber);

null data type

var x = null;

console.log(x);
                      


                 ConditionRule

if (condition){
    code
}


var number1 = 30;
var number2 = 50;

if(number1 < number2){
    console.log("number2 is big ");



    var number = 50;
    if(number % 2 == 0){
        console.log("the number is even/jor");
    }
    if(number % 2 == 1){
        console.log("the number is odd/bijor");
    }




    var number = 51;

    if(number % 2 == 0){
        console.log("the number is even/jor");
    }
    if(number % 2 == 1){
        console.log("the number is odd/bijor");
    }


var number1 = 250;
var number2 = 100;

if(number1 > number2){

console.log("number1 is big digit ");

}
else{
    console.log("number1  is small digit");
}


var number1 = 50;
var number2 = 100;

if(number1 > number2){

console.log("number1 is big digit ");

}
else{
    console.log("number1  is small digit");
}




var number1 = 200;

var number2 = 200;

if(number1 > number2){

    console.log("number1 is big");

}
else if (number2 > number1){
    console.log("number2 is big ");
}  

else{
    console.log("number1 and number2 is equal");
}




ternary oprator



example ///  var test = (condition) ? "true" : "flase"

var number1 = 1000;
var number2 = 100;

var result = (number1 > number2) ? "number1 is big" : "number2 is big ";
console.log(result);


             for loop    
        + Loop 
for (var i= 0; i < 50; i++){
console.log(i + 1);
}

        -Loop

for (var i = 10; 0 < i; i--){
    console.log(i);
}

        while Loop
        +Loop

var i = 1;

while(i <= 10){
    console.log(i);
    i++;
}

          Array Array Array Array Array Array Array Array  //

        frist and last added system


var array = [10, 45, 80, 60, 46, 48, 46 , 94 ,48]

var addNumber = array.push(100);  //push ja laste data add kore

array.unshift(8);  //friste data add kora

console.log(array);
  

                frist and last remove system

var array = [10, 45, 80, 60, 46, 48, 46 , 94 ,48]

var addNumber = array.pop();  //pop ja laste teke data remove kore

array.shift();  //friste teke data remove kora

console.log(array);


        lenght..... ai mathode ta us korle array te koita Element ache seta dekai

console.log(arry.lenght);
    
            Array index cheack

            var array = [10, 45, 80, 60, 46, 48, 46 , 94 ,48]
             console.log(arry[0]);
             console.log(arry[2]);
             console.log(arry[5]);
             console.log(arry[6]);



       array loop diya print kora


var array = [10, 45, 80, 60, 46, 48, 46 , 94 ,48];

for ( var i = 0; i < array.lenght; i++){
        var result = array[i];

        console.log(result,i);
}


                Problem solving
kono akta letter vowel kina ta nirnoi koro

        input boro hater hole toLowcase us korte hobe 
        input coto hater hole touppercase us korte hobe


var input = "A";
var letter = input.toLowerCase();

if(letter == "a"  || letter == "e" || letter == "i" || letter == "o" || letter == "u"){
        console.log( letter, "is vowel");
}
else{
        console.log( letter, "is not vowel");
}


        3ti sonka teke konti boro seta bahir koro

var number1 = 10;
var number2 = 20;
var number3 = 30;

if(number1 > number2){
       if(number1 > number3){
        console.log("number1 is big");
       }
}
if(number2 > number3){
       if(number2 > number1){
        console.log("number2 is big");
       }
}
else{
        console.log("number3 is big ");
}


                1--100 ar modde jor sonkha ber korar programm liko

for(var i = 1; i <= 100; i++){
        if(i % 2 == 0){
                console.log(i);
        }
}


                1--100 ar modde bejor sonkha ber korar programm liko

for(var i = 1; i <= 100; i++){
        if(i % 2 == 1){
                console.log(i);
        }
}
                        gun

                akta Loop ar sahajje 7 ar namuta 

var number = 7

for(var i = 1; i<= 10; i++){

        console.log(i*number);
}

                table akare gun
        
var number = 7;

for(var i = 1; i <= 10; i++){
        var result = i * number;
        var multiplicationTable = number + " * "+ i + " = " + result;
        console.log(multiplicationTable);
}