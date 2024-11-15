let firstNum = "";
let operator = "";
let secondNum = '';
let isOperator = false;

const dot = document.querySelector(".itemdot");
const plus = document.querySelector(".itemadd");
const subtraction = document.querySelector(".itemsub")
const division = document.querySelector(".itemdiv");
const multiplication = document.querySelector(".itemmul");
const equals = document.querySelector(".itemRes");
const del = document.querySelector(".itemdel");
const reset = document.querySelector(".itemAc");
const percentage = document.querySelector(".itemper");
const showinput = document.querySelector(".userInput");



function getNum(num){
    if(operator === ""){ if(num==="." && firstNum.includes(".") )return;
        firstNum += num;
    }else{
        if(num==="." && firstNum.includes(".") )return;
        secondNum += num
    } 
}


function getOperator(op){
    if(operator == ""){
        operator = op;
       // isOperator = true;
    }else{
        const result = calculate();
        firstNum = result;
        operator = op;
        secondNum = "";
    }
}

function calculate(){
    if (firstNum === ""){
        firstNum = 0;
    }
    if(secondNum == ""){
        secondNum = firstNum;
    };
    if(operator === "+"){
        return parseFloat(firstNum) + parseFloat(secondNum)
    }
    else if(operator === "*"){
        return parseFloat(firstNum) * parseFloat(secondNum)
    }
    else if(operator === "-"){
        return parseFloat(firstNum) - parseFloat(secondNum)}
    else if(operator === "/"){
        if(secondNum !== "0"){
           return parseFloat(firstNum)/parseFloat(secondNum) 
        }else{
          return  "Error"
        } 
    }
}



dot.addEventListener("click", () => {
    getNum(".");
})
plus.addEventListener("click", () => {
    getOperator("+");
})