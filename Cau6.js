let num1 = 0, num2 = 1;
let finaboci = "";

for (let i = 1; i <= 20; i++) {
    finaboci += num1 + " ";

    let next = num1 + num2;
    num1 = num2;
    num2 = next;
}

alert("20 số Fibonacci đầu tiên: " + finaboci);