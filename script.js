function add (a,b) {
    return Number(a)+Number(b);
}

function subtract(a,b) {
    return a-b;
}

function multiply(a,b) {
    return a*b;
}

function divide(a,b) {
    return a/b;
}

function operate(a,b,operator) {
    switch (operator) {
        case "+":
            return add(a,b);
        case "-":
            return subtract(a,b);
        case "*":
            return multiply(a,b);
        case "/":
            return divide(a,b);
    }
}

var a, b, operator, answerShowing;

buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", () => {
      if (button.id == "ce") {
          clearDisplay();
      } else if (button.id == "c") {
          clearDisplay();
          clearWorking();
      } else if (button.classList == "operator") {
          if (a) {
            workingOut(document.getElementById("current-value").textContent, button.id)
          } else {
              a = document.getElementById("current-value").textContent
              operator = button.id
              clearDisplay();
          }
      } else{
          if (answerShowing) {
              clearDisplay()
              answerShowing=false;
          }
          document.getElementById("current-value").textContent += button.textContent;
      }
    } )       
});

function workingOut(b, o) {
    console.log(a, operator, b)
    if (operator == "plus") {
        a = add(a,b);
        console.log(a);
    } else if (operator == "minus") {
        a = subtract(a,b);
        console.log(a)
    } else if (operator == "divide") {
        if (b==0) {
            a = "CANNOT DIVIDE BY ZERO"
            displayAnswer();
        } else {
        a = divide(a,b);
        }
    } else if (operator == "multiply") {
        a = multiply(a,b);
    }

   console.log(a);
    if (o == "equals") {
        displayAnswer();
    } else {
        operator = o;
        clearDisplay();
    }
}

function displayAnswer() {
    answerShowing = true
    clearWorking()
    document.getElementById("current-value").textContent = a;
    console.log(`ans is ${a}`)
    a= null;
}

function clearWorking () {
    document.getElementById("working").textContent = ""
}
function clearDisplay() {
    document.getElementById("current-value").textContent = ""
}

function addToWorking (operator) {
    currentValue  = document.getElementById("current-value")
    document.getElementById("working").textContent += currentValue.textContent + operator
}