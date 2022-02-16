let firstNum = parseInt(prompt("First Number?"));
if (Number.isInteger(firstNum) == false) {firstNum = 0;}
let secondNum = parseInt(prompt("Second Number?"));
if (Number.isInteger(secondNum) == false) {secondNum = 0;}
let answerNum = firstNum + secondNum;
console.log(answerNum);
if (isNaN(answerNum)) {
    document.getElementById("answer").innerHTML = "Error";
    document.title = "Error";
}
else {
    document.getElementById("answer").innerHTML = `The Answer is: ${answerNum}`;
    document.title = `${firstNum} + ${secondNum} = ${answerNum}`;
}


