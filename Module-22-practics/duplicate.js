const names = ["abul", "tabul", "babul", "cabul", "dabul", "ebul", "fabul", "abul", "babul", "gabul", "abul", "habul", "cabul",]

function removeDuplicate(names){
    const unique = [];
    // for(let i = 0; i < names.lenght; i ++){
    //     const element = names[i];
    //     console.log(element);
    // }

    for(const element of names){
        console.log(element);
        if(unique.indexOf(element) == -1){
            unique.push(element);
        }
       
    }
    return unique;
}
const unique =  removeDuplicate(names);
console.log(unique);


