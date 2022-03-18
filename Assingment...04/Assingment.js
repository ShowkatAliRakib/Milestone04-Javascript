

  //problem 01
function  anaToVori(ana){
    
    let vori = ana * (16);
    return vori;
  
   
}
 anaToVori(2);


   //problem 02 

    function pandaCost(singaraSongka, somucarSongka, jilaprSongka){

    
    //perValu
    var singaraDam = 7
    var somucarDam = 10
    var jilaprDam = 15
    //Total
    var totalSingararDam = singaraDam * singaraSongka
    var totalSomucarDam = somucarDam * somucarSongka
    var totalJilapirDam = jilaprDam * jilaprSongka

    //totalPrice 
    const totalPrice = totalSingararDam + totalSomucarDam + totalJilapirDam
    
    return totalPrice
    
    
}
pandaCost(10, 10, 10);





//problem 03

function  picnicBudget(quantity){
     //error handling
    if (typeof quantity != "number"){
        return "please give a number value"
    }


    let price;
     
    if (quantity <= 100){
        price = quantity * 5000;
    }else if (quantity <= 200){
        price = quantity * 4000;
    }
    else if(quantity >= 201){
        price = quantity * 3000;
    }
    return price;

}
picnicBudget(300);





//problem 04
function oddFriend(friends){
    friend = [];
    for(element of friends){
        //error handling
        if(typeof element != "string"){
            return "please give a string value"
        }
        if(element.length == 5){
            friend = element
            break
        }
    }
    return friend
}
oddFriend(["nahidul", "Rakib", "sakibul", "sowkat",]);