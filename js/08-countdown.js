var userStartValue;

userStartValue = parseInt(window.prompt("Please enter a number you want to count down from:"), 10);

for(var i = userStartValue; i >= 0; i -= 1) {
    document.write(i + "<br>");
}