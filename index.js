// vvv The following are the project requirement:
//--------------------------------------------------------------------------------------------
// √User Prompt when Website opens
// √customer type in vanilla,vanilla,vanilla,strawberry,coffee,coffee as input into the prompt
// √split flavors by commas into an flavors array
// √create a table that displays how many of each flavor the customer ordered (pseudo input)
// display in console the quantity of each flavor listed
// --------------------------------------------------------------------------------------------
// ^^^ Project Requirement End


let flavors = prompt("What flavors would you like?", "vanilla,vanilla,vanilla,strawberry,coffee,coffee");
// ^^ This creates a variable that is assigned the prompt function result of the 2nd parameter
// ^^ This Prompts the user with a question (first parameter), (Second parameter) is the pseudo user input, in a realistic environment we would
//^^ leave the second parameter blank so user could input strings response into the prompt

let flavorArray = flavors.split(',');
// ^^ this declares a variable that is assigned an array by the .split method. The .split(',') method
// ^^ is being used to split the flavors variable assigned pseudo user input (parameter 2) string into an array of substring based
// ^^ on a specific delimiter. In this case, the delimiter is the (',') after .split method and is telling .split to split the string at each comma (',')
// ^^ after splitting the inputted string at each comma, the comma is actually removed and only the subtrings are being inputted into the array
// ^^ commas are shown in the array response because the array datatype innately utilizes commas to separate its index positions.
// ^^ .split method is splitting flavors user input at the comma, creating an array with the split substrings, and then assigning the array to the flavorArray variable.

// console.log(flavorArray); 
// This console log allows us to see the output of the newly initialized flavorArray variable

function countFlavors(flavorArray) {

const froyoOrder = {};
// this declares an object. It is not initialized here as it has no value yet. 
// It's purpose is to organize large amounts of similar data. For example, how many of each flavor of frozen 
// yogurt was ordered in this js file. 

    for (let i = 0; i < flavorArray.length; i++) {
        // this is setting the iteration equal to zerom; telling the loop to run as many times as index positions exists; and adding 1 iteration after
        // each time the loop is ran; 
       
        console.log(flavorArray[i]);
// This is telling console.log to print/log the value of the current position. Each iteration/index position of the array will be logged as we used [i] 
// instead of an actual index position in the array. Using the i or iteration starts at the first index position. When the loops runs, it will move to 
// the next index/iteration position.

       // console.log(i);
       // ^^ Do Not Use this console.log(i). Informational Purposes, This is logging/printing the value of the loop variable i (let =i). It will print/log the current index position as the loop iterates.
        
       if (froyoOrder[flavorArray]) {
             //^^If we have seen the flavor before
        
            froyoOrder[flavorArray] = result[flavorArray] +=1;
        //^^ increase the number by 1
        //^^ froyoOrder[flavorArray] = result[flavorArray] +1; <<< this is another way of writing it. The live line of code above is shorthand +=

        } else{ froyoOrder[flavorArray] = 1;
        // ^^ if we have not seen it before, add it to the result
        }
    }  
    }
console.table(froyoOrder);
// ^^ This presents object array data and console.log() function output data in console as a table


