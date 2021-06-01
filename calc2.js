let displayValue = "";
let saveValue = " ";
let runningTotal = "";
let operation = "";
let btnValue = "";
let newNumber = true;

const display = document.getElementById("display");
const clear = document.getElementById("clear");
const numButtons = document.querySelectorAll("button.numBtn");

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

function addDisplay(btnValue){  
    if (newNumber == true){
        displayValue = "";
        display.textContent = displayValue;
    }
    newNumber = false;
    displayValue += btnValue;
    display.textContent = displayValue;
}

//Sets "operation" variable when operation button is clicked
function setOperation(a){
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

    //Moves displayValue to saveValue
    if (saveValue = " "){
    saveValue = displayValue;
    console.log("overwrite blank",saveValue);
    console.log(operation);
    }
    
}
function Add(){
    saveValue = parseInt(saveValue) + parseInt(displayValue);
}
function Subtract(){
    saveValue = saveValue - displayValue;
}
function Multiply(){
    saveValue = saveValue * displayValue;
}
function Divide(){
    saveValue = saveValue / displayValue;
}

