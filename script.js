let firstNum = "";
let operator = "";
let secondNum = '';
let isFirstNum = false;
let isError = false;

const dot = document.querySelector(".itemdot");
const plus = document.querySelector(".itemadd");
const subtraction = document.querySelector(".itemsub")
const division = document.querySelector(".itemdiv");
const multiplication = document.querySelector(".itemmul");
const equals = document.querySelector(".itemRes");
const del = document.querySelector(".itemdel");
const reset = document.querySelector(".itemAc");
const percentage = document.querySelector(".itemper");
const showInput = document.querySelector(".user-input");
const showResult = document.querySelector(".show-result");



function getNum(num){
  if(isError) return

    if(operator === ""){ if(num==="." && firstNum.includes(".") )return;
      if(isFirstNum == true){
         firstNum = "";
        showInput.textContent = num;
        isFirstNum = false;
       }else{
        firstNum += num;
        showInput.textContent += num;
      }
        
    }else{
        if(num==="." && secondNum.includes(".") )return;
        secondNum += num
        showInput.textContent += num;
    } 
}


function getOperator(op){

  if(isError)return

    if(operator === ""){
        operator = op;
        showInput.textContent += op;}
    else{
      if (secondNum === "") {
        operator = op;
        showInput.textContent = showInput.textContent.slice(0, -1) + op;
      }
         else{
          const result = calculate();
          if (result === "Math Error") {
            showResult.textContent = result;
            firstNum = "";
            operator = "";
            secondNum = "";
            showInput.textContent = "";
            isError = true;
            }
         else{
            showResult.textContent = result;
            firstNum = parseFloat(result.toFixed(8));
            showInput.textContent = firstNum + op;
            operator = op;
            showInput.textContent += op;
            secondNum = "";
         }
         }
         
      }
    }  

function calculate(){
  if(operator === "" && secondNum === "") return firstNum

  if(operator === "+" || operator === "-"){
    if(firstNum === "") {firstNum = "0"};
    if (secondNum === ""){secondNum = "0"}

    return operator === "+" 
    ?parseFloat(firstNum) + parseFloat(secondNum)
    :parseFloat(firstNum) - parseFloat(secondNum)
}else{
  if(firstNum === "" || secondNum === ""){
    return "Math Error"
  }

  if(operator === "*"){
    return parseFloat(firstNum) * parseFloat(secondNum)
  }else{
    return secondNum ==="0"
    ? "Math Error"
    : parseFloat(firstNum) / parseFloat(secondNum)
  }
}
}




dot.addEventListener("click", () => {
    getNum(".");
})
plus.addEventListener("click", () => {
    getOperator("+");
})

subtraction.addEventListener("click", () => {
    getOperator("-");
})

multiplication.addEventListener("click", () => {
    getOperator("*");
})
division.addEventListener("click", () => {
    getOperator("/");
})
equals.addEventListener("click", () => {
    let result = calculate()
    if (result === "Math Error") {
      showResult.textContent = result;
      firstNum = "";
      operator = "";
      secondNum = "";
      showInput.textContent = "";
      isError = true;
      }
     else{
        showResult.textContent = result;
        firstNum = parseFloat(result.toFixed(8));
        showInput.textContent = firstNum;
        isFirstNum = true;
        secondNum = "";
        operator = "";
     };   
})
reset.addEventListener("click", () => {
    firstNum = "";
    operator = "";
    secondNum = '';
    isFirstNum = false;
    showInput.textContent = "";
    showResult.textContent = 0;
    isError = false;

})