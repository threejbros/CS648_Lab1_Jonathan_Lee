var totalLevels = 7;
var output = "";
for(var currentLevel = 1; currentLevel <= totalLevels; currentLevel += 1) {
    for(var count = 0; count < currentLevel; count += 1) {
        output += "#";
    }
    output += "\n";
}
console.log(output);