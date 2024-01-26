var totalLevels = 7;
for(var currentLevel = 1; currentLevel <= totalLevels; currentLevel += 1) {
    var output = "";
    for(var count = 0; count < currentLevel; count += 1) {
        output += "#";
    }
    console.log(output);
}