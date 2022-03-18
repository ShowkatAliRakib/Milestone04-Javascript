

    //js jog korar function

// function add(num1 , num2){
//     const result = num1 + num2;
//     return result
// }
// const addTotal = add(10, 320);
// console.log(addTotal);


    //js gon korar funtion


    // function multiply(num1 , num2){
    //     const result = num1 * num2;
    //     return result
    // }
    // const multiplyTotal = multiply(10, 320);
    // console.log(multiplyTotal);


            

function woodCalculator(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 7;
    const perTableWood = 10;
    const perBedWood = 15;

    //wood calculation
    const chairWoodQuantity = chairQuantity * perChairWood;
    const tableWoodQuantity = tableQuantity * perTableWood;
    const bedWoodQuantity   = bedQuantity * perBedWood;


    //adding all Quantity
    const totalWood = chairWoodQuantity + tableWoodQuantity + bedWoodQuantity;
    return totalWood;

}
const fristOption = woodCalculator(1, 1, 1);
console.log(fristOption);