// Day 2
var optcode = "1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,13,1,19,1,19,6,23,1,23,6,27,1,13,27,31,2,13,31,35,1,5,35,39,2,39,13,43,1,10,43,47,2,13,47,51,1,6,51,55,2,55,13,59,1,59,10,63,1,63,10,67,2,10,67,71,1,6,71,75,1,10,75,79,1,79,9,83,2,83,6,87,2,87,9,91,1,5,91,95,1,6,95,99,1,99,9,103,2,10,103,107,1,107,6,111,2,9,111,115,1,5,115,119,1,10,119,123,1,2,123,127,1,127,6,0,99,2,14,0,0";

var newoptcode = "1,12,2,3,1,1,2,3,1,3,4,3,1,5,0,3,2,13,1,19,1,19,6,23,1,23,6,27,1,13,27,31,2,13,31,35,1,5,35,39,2,39,13,43,1,10,43,47,2,13,47,51,1,6,51,55,2,55,13,59,1,59,10,63,1,63,10,67,2,10,67,71,1,6,71,75,1,10,75,79,1,79,9,83,2,83,6,87,2,87,9,91,1,5,91,95,1,6,95,99,1,99,9,103,2,10,103,107,1,107,6,111,2,9,111,115,1,5,115,119,1,10,119,123,1,2,123,127,1,127,6,0,99,2,14,0,0";

var optcodeArray = newoptcode.split(",");
optcodeArray = optcodeArray.map(Number);

for (var i = 0; i < optcodeArray.length; i += 4) {
    if (optcodeArray[i] == 99) {
        break;
    } else {
        var firstIndex = optcodeArray[i + 1];
        var firstValue = optcodeArray[firstIndex];
        var secondIndex = optcodeArray[i + 2];
        var secondValue = optcodeArray[secondIndex];
        var targetIndex = optcodeArray[i + 3];
        var result = 0;
        if (optcodeArray[i] == 1) {
            result = firstValue + secondValue;
        } else if (optcodeArray[i] == 2) {
            result = firstValue * secondValue;
        }
        optcodeArray[targetIndex] = result;
    }
}

var newoptcodeArray = optcode.split(",");
newoptcodeArray = newoptcodeArray.map(Number);
var answer;
for (var j = 0; j < 100; j++) {
    for (var k = 0; k < 100; k++) {
        var currentoptcodeArray = newoptcodeArray.slice(0);
        currentoptcodeArray[1] = j;
        currentoptcodeArray[2] = k;
        for (var i = 0; i < currentoptcodeArray.length; i += 4) {
            if (currentoptcodeArray[i] == 99) {
                break;
            } else {
                var firstIndex = currentoptcodeArray[i + 1];
                var firstValue = currentoptcodeArray[firstIndex];
                var secondIndex = currentoptcodeArray[i + 2];
                var secondValue = currentoptcodeArray[secondIndex];
                var targetIndex = currentoptcodeArray[i + 3];
                var result = 0;
                if (currentoptcodeArray[i] == 1) {
                    result = firstValue + secondValue;
                } else if (optcodeArray[i] == 2) {
                    result = firstValue * secondValue;
                }
                currentoptcodeArray[targetIndex] = result;
            }
        }
        if (currentoptcodeArray[0] == 19690720) {
            answer = currentoptcodeArray[1] + " " + currentoptcodeArray[2];
            console.log(currentoptcodeArray[1] + " " + currentoptcodeArray[2]);
        }
        console.log(currentoptcodeArray);
    }
}

// Answers: 12490719, 2003