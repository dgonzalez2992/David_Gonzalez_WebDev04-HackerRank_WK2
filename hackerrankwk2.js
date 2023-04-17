// HACKER RANK WEEK 2 DAVID GONZALEZ

//Lonely Integer
function lonelyinteger(a) {
    // Write your code here
    let index = 0;

    let sorted = a.sort((a, b) => a - b);
    console.log("sorted: ", sorted);


    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i] === sorted[i + 1]) {
            i++
        } else {
            index = i;
        }
    }

    console.log(sorted[index]);
    return sorted[index]

}

// Grading Students
function gradingStudents(grades) {
    // Write your code here
    return grades.map(el => {
        if (el < 38) {
            return el;
        }
        if (Math.floor(el / 5) * 5 + 5 - el < 3) {
            return Math.floor(el / 5) * 5 + 5
        }
        return el;
    })

}

//  Flipping bits
function flippingBits(n) {
    // Write your code here
    let a = ((2 ** 32) - 1) - n;
    console.log(a);
    return a;
}


// Diagonal Difference
function diagonalDifference(arr) {
    // Write your code here
    let x1 = 0;
    let x2 = 0;

    for (let i = 0; i < arr.length; i++) {

        x1 = x1 + arr[i][i]
        x2 = x2 + arr[i][arr.length - i - 1];

    }

    return Math.abs(x2 - x1);

}


//Counting Sort 1
function countingSort(arr) {
    // Write your code here
    let finalArr = [];

    for (var i = 0; i < 100; i++) {
        finalArr.push(0);
    }

    arr.forEach(el => {
        finalArr[el] = finalArr[el] + 1
    })

    console.log(finalArr);
    return finalArr;
}

// Counting Valleys
function countingValleys(steps, path) {
    // Write your code here
    const pathToArray = path.split('');
    let distanceFromSeaLevel = 0;
    let totalValleys = 0;

    pathToArray.forEach((el, index) => {
        if (el === 'U') {
            distanceFromSeaLevel++
        }

        if (el === 'D') {
            distanceFromSeaLevel--
        }

        if (distanceFromSeaLevel === 0 && el === 'U') {
            totalValleys++
        }
    })
    return totalValleys
}

// Pangrams
function pangrams(s) {
    // Write your code here
    s = s.toLowerCase().replace(/[^a-z]/g, '');
    const alphabets = new Set();

    for (const char of s) {
        alphabets.add(char);
    }
    if (alphabets.size === 26) {
        return 'pangram';
    } else {
        return 'not pangram'
    }
}

// Mars Exploration
function marsExploration(s) {
    // Write your code here

    let changedCount = 0;

    for (let i = 0; i < s.length; i += 3) {

        if (s[i] !== 'S') {
            changedCount++;
        }
        if (s[i + 1] !== 'O') {
            changedCount++;
        }
        if (s[i + 2] !== 'S') {
            changedCount++;
        }
    }

    return changedCount;
}