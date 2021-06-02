let displayValue = "";
let saveValue = "";
let operation = "";
let btnValue = "";
let newNumber = true;

const display = document.getElementById("display");
const clear = document.getElementById("clear");
const numButtons = document.querySelectorAll("button.numBtn");
const btnEquals = document.getElementById("btnEquals");

//Adds click listeners to number buttons
for (i = 0; i < numButtons.length; i++){
    let btnValue = numButtons[i].value;
    numButtons[i].addEventListener("click", () => addDisplay(btnValue)); 
}

//Adds click listeners to operation buttons
document.getElementById("btnAdd").addEventListener("click",() => setOperation("Add"));;
document.getElementById("btnSubtract").addEventListener("click",() => setOperation("Subtract"));
document.getElementById("btnMultiply").addEventListener("click",() => setOperation("Multiply"));
document.getElementById("btnDivide").addEventListener("click",() => setOperation("Divide"));

//Adds click listener to equals button
btnEquals.addEventListener("click",() => operate());
btnEquals.addEventListener("click",() => saveValue = "");

//Adds click listener to clear button
clear.addEventListener("click",() => clearDisplay());

function addDisplay(btnValue){  
    if (newNumber == true){
        displayValue = "";
        display.textContent = displayValue;
    }
    newNumber = false;
    displayValue += btnValue;
    display.textContent = displayValue;
    console.log("displayValue",displayValue);
    console.log("saveValue",saveValue);
}

function clearDisplay(){
    saveValue = "";
    displayValue = "";
    display.textContent = displayValue;
}

//Sets "operation" variable when operation button is clicked
function setOperation(a){
    //Moves displayValue to saveValue if blank. Otherwise, use displayValue to operate
    if (saveValue == ""){
        saveValue = displayValue;
    
        console.log("overwrite blank",saveValue);
        console.log(operation);
    
        }else{
            operate();
        }    
    
    newNumber = true;
    if (a == "Add"){
        operation = "Add"
    }else if (a == "Subtract"){
        operation = "Subtract"
    }else if (a == "Multiply"){
        operation = "Multiply"
    }else if (a == "Divide"){
        operation = "Divide"
    }

}

function operate(){
    if (operation == "Add"){
        Add();
    }else if (operation == "Subtract"){
        Subtract();
    }else if (operation == "Multiply"){
        Multiply();
    }else if (operation == "Divide"){
        Divide();
    }
}

function Add(){
    saveValue = parseInt(saveValue) + parseInt(displayValue);
    displayValue = saveValue;
    display.textContent = displayValue;
    console.log("added");
    console.log("saveValue", saveValue);
}
function Subtract(){
    saveValue = saveValue - displayValue;
    displayValue = saveValue;
    display.textContent = displayValue;
    console.log("subtracted");
    console.log("saveValue", saveValue);
}
function Multiply(){
    saveValue = saveValue * displayValue;
    displayValue = saveValue;
    display.textContent = displayValue;
    console.log("multiplied");
    console.log("saveValue", saveValue);
}
function Divide(){
    saveValue = saveValue / displayValue;
    displayValue = saveValue;
    display.textContent = displayValue;
    console.log("divided");
    console.log("saveValue", saveValue);
}

