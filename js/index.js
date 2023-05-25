doEquation = () => {
    let first = +document.getElementById("valueOne").value
    let operation = document.getElementById("function").value
    let last = +document.getElementById("valueTwo").value
    let answer = 0;

    if(operation === "Plus"){
        answer = first + last
    } else if (operation === "Minus"){
        answer = first - last
    } else if (operation === "Times"){
        answer = first * last
    } else if (operation === "Divide"){
        answer = first / last
    }

    alert("Your answer is " + answer)
    console.log(answer)
    document.getElementById("calculatorForm").reset()
}