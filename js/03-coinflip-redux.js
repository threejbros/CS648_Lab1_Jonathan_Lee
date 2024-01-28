var coinFlip;

for (var count = 0; count < 10; count += 1) {
    coinFlip = Math.round(Math.random());

    if (coinFlip == 0)
        window.console.log("Heads");
    else if (coinFlip == 1)
        window.console.log("Tails");
    else
        window.console.log("This message should never print because coinFlip should be 0 or 1.");
}