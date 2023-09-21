// User Prompt when Website opens
// customer type in vanilla,vanilla,vanilla,strawberry,coffee,coffee as input into the prompt
// create a table that displays how many of each flavor the customer ordered (inputted)
// Customer order input is the following: (3) vanilla, (2) coffee, and (1) strawberry
//let flavors = prompt("What flavors would you like?", "vanilla,vanilla,vanilla,strawberry,coffee,coffee" )
const flavors = "vanilla,vanilla,vanilla,strawberry,coffee,coffee";

// display in console the quantity of each flavor listed
//split flavors by commas into an flavors array

let flavorArray = flavors.split(',');
console.log(flavorArray); 

const froyoOrder = {};
    for (let i = 0; i < flavorArray.length; i++) {
        console.log(flavorArray[i]);
        console.log(i);
    }



