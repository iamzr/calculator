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
var neg = false;
var dotOn = false;

buttons = document.querySelectorAll("button");
buttons.forEach(button => {

    button.addEventListener("click", () => {
        currentValue = document.getElementById("current-value").textContent
        if (button.id == "ce") {
          clearDisplay();
        } else if (button.id == "c") {
          clearDisplay();
          clearWorking();
        } else if (button.id == "dot") {
            if (dotOn) {
                console.log("dot off")
                return
            } else {
                console.log("dot on")
                dotOn = true;
                document.getElementById("current-value").textContent += `${button.textContent}`;
            }
        } else if (button.classList == "operator") {
            if (a) {
            workingOut(currentValue, button.id)
            } else {
                a = currentValue;
                operator = button.id;
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
        if (b == 0 ) {
            document.getElementById("current-value").textContent = "CANNOT DIVIDE BY ZERO"
            clearWorking()
        } else {
         console.log("divided")
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
    a = Math.round(a * 1000)/1000;
    document.getElementById("current-value").textContent = a;
    console.log(`ans is ${a}`)
    a= null;
    dotOn = false;
    clearWorking()
}

function clearWorking () {
    a = null;
}
function clearDisplay() {
    document.getElementById("current-value").textContent = ""
}

function addToWorking (operator) {
    currentValue  = document.getElementById("current-value")
    document.getElementById("working").textContent += currentValue.textContent + operator
}