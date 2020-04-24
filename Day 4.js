// Day 4
var correctArray = [];
for (var i = 156218; i <= 652527; i++) {
    var charArray = Number(i).toString().split("");
    var hasDoubleConsec = false;
    var hasAllIncreasing = false;
    var doubleLocked = false;
    var consecValues = 1;
    for (var j in charArray) {
        if (j > 0) {
            var currentNumber = Number(charArray[j]);
            var previousNumber = Number(charArray[j - 1]);
            if (currentNumber >= previousNumber) {
                hasAllIncreasing = true;
                if (currentNumber == previousNumber) {
                    hasDoubleConsec = true;
                    consecValues++;
                    if (j == 5 && consecValues == 2) {
                        doubleLocked = true;
                    }
                } else {
                    if (consecValues == 2) {
                        doubleLocked = true;
                    }
                    consecValues = 1;
                }
            } else {
                hasAllIncreasing = false;
                break;
            }
        }
    }
    if (doubleLocked && hasAllIncreasing) {
        correctArray.push(i);
    }
}

// Answers: 1694, 1148