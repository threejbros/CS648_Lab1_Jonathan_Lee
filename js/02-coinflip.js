var coinFlip = parseInt(Math.random() * 100, 10);
var userPick;
var actualFlipIsHead;
var userPickIsHead;

userPick = window.prompt("Please enter either Heads (H) or Tails (T): ");
while (userPick !== "h" && userPick !== "H" && userPick !== "T" && userPick !== "t") {
    userPick = window.prompt("Invalid Input. Please enter \'H\' for Heads or \'T\' for Tails: ");
}

if (userPick === "h" || userPick === "H") {
    userPickIsHead = true;
}
else if (userPick === "T" || userPick === "t") {
    userPickIsHead = false;
}

if (coinFlip < 50) {
    actualFlipIsHead = true;
}
else {
    actualFlipIsHead = false;
}

if (userPickIsHead && actualFlipIsHead) {
    window.alert("The flip was heads and you chose heads...you win!");
}
else if (!userPickIsHead && actualFlipIsHead) {
    window.alert("The flip was heads but you chose tails...you lose!");
}
else if (userPickIsHead && !actualFlipIsHead) {
    window.alert("The flip was tails but you chose heads...you lose!");
}
else if (!userPickIsHead && !actualFlipIsHead) {
    window.alert("The flip was tails and you chose tails...you win!");
}



/*
var coinFlip = parseInt(Math.random() * 100, 10);
var userPick;
var actualFlip;

userPick = window.prompt("Please enter either Heads (H) or Tails (T): ");

if (coinFlip < 50) {
    actualFlip = "H";
}
else {
    actualFlip = "T";
}

if (userPick === "H" && actualFlip === "H") {
    window.alert("The flip was heads and you chose heads...you win!");
}
else if (userPck === "T" && actualFlip === "H") {
    window.alert("The flip was heads but you chose tails...you lose!");
}
else if (userPick === "H" && actualFlip === "T") {
    window.alert("The flip was tails but you chose heads...you lose!");
}
else if (userPick === "T" && actualFlip === "T") {
    window.alert("The flip was tails and you chose tails...you win!");
}
*/
 