var number1;
var number2;

number1 = parseInt(window.prompt("Please enter the first number:"), 10);
number2 = parseInt(window.prompt("Please enter the second number:"), 10);

if (number1 > number2) {
    document.write("The larger value of {" + number1 + ", " + number2 + "} is " + number1 + ".<br>");
}
else if (number2 > number1) {
    document.write("The larger value of {" + number1 + ", " + number2 + "} is " + number2 + ".<br>");
}
else {
    document.write("Both values {" + number1 + ", " + number2 + "} are equal. So, there is no larger value. <br>");
}