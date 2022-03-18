//function name(params) {}
    


function sumOfNumbers (number1, number2) {
    var result = number1 + number2;
    return result;
}

var addNumbers = sumOfNumbers(64, 4)
console.log(addNumbers);

        question  ==  simple akta params nite hobe abong akta custome masseg return korte hobe 

function msgGenerator(name){
    var massag = "Hello " + name + ", Welcome to programming Hero";
    return massag;
}

console.log(msgGenerator("Showkat Ali Rakib"));  


function pizzaPanda(foodName, quantity) {

        if (foodName.toLowerCase() != "pizza") {

                return "Sorry, we sell pizza only"

               
        }
        if ( quantity > 11) {
                return "Sorry , only 10 pizza left"
            }

        var price = 10 * quantity

        var masseg =   "Order suiccessfull, Order info: " + foodName + " Price : " + price + "$"
        
      
        return masseg
        
}
console.log(pizzaPanda("pizza",404));


             object
        
var parson = {
        name: "Showkat",
        age: 50,
        height : "5 feet 6 inch" ,
        haircolor: "black",
        male: true 
}
var parsonName = " Ali Rakib"
console.log(parsonName);

console.log(parson.male);



var person1 = "Rakib"
var hisAge = 56

var hisDetails = " His name is ${person1} He is ${hisAge} years old,"

console.log(hisDetails);



                 switch switch switch switch switch switch switch switch
        var age = 30
switch (age) {
        case 60:
                console.log("too old");
                break;
        case 30:
                console.log("young");
                break;
        case 10:
                console.log("child");
       
                
                break;

        default:
                console.log("I dont know");
                break;
}

function printer (numberLimit) {
      for (var i= 1; i < numberLimit + 1; i++) {
           
              console.log(i);
      }
}

printer(100)
printer(200)
printer(300)