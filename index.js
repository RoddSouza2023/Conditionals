console.log("IS TRUTHY ----------------------------------------------------------------------------------------------------------------------");

let valuesToTest = ["I am string", false, null, undefined, 0, ""];

function booleanTester(arr1) {
    for (let i = 0; i < arr1.length; i++) {

        if(!arr1[i]) {

            if(arr1[i] === "") {
                console.log("The empty string is a falsy");
            } else if (arr1[i] === null || arr1[i] === undefined){ 
                console.log("The " + arr1[i] + " is falsy");
            } else {
                console.log("The " + arr1[i] + " value is falsy");
            }

        } else {
            console.log("true");
        }

    }
}

booleanTester(valuesToTest);


console.log("NUMBER LINE ----------------------------------------------------------------------------------------------------------------------");

let num1 = [50, 99, 0, 500, -1000, -5];
let num2 = [51, -2, 101, -500, 0, 0];

function numberAddition(arr1, arr2) {

    for (let i = 0; i < arr1.length; i++) {
        sum = arr1[i] + arr2[i];

        if (sum > 0 && sum <= 100) {
            console.log(sum + " is greater than 0");
        } else if (sum < 0) {
            console.log(sum + " is a negative number");
        } else if (sum === 0) {
            console.log(sum + " is equal to 0");
        } else {
            console.log(sum + " is greater than 100");
        }

    }

}

numberAddition(num1, num2);


console.log("GREATER THAN 5 ----------------------------------------------------------------------------------------------------------------------");

let nums1 = [5, 10, 0, 1000, 6, 5];
let nums2 = [6, 11, 0, -1000, 4, 5];

function greaterThanFive(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {

        if (arr1[i] >= 5  && arr2[i] >= 5) {
            console.log("true");
        } else {
            console.log("false");
        }

    }
}

greaterThanFive(nums1, nums2);


console.log("PAIR AND COMPARE ----------------------------------------------------------------------------------------------------------------------");

let pairs1A = ["cat", "five", 0, "eight", 11, "cake"];
let pairs1B = ["cat", 5, false, "eight", "eleven", "cake"];
let pairs2A = [6, "dog", "horse", "ate", "four", "pie"];
let pairs2B = ["6", "dawg", "horse", "ate", "for", "pie"];

function pairChecker (arr1, arr2, arr3, arr4) {

    for (let i = 0; i < pairs1A.length; i++) {
        if ( (pairs1A[i] === pairs1B[i]) || (pairs2A[i] === pairs2B[i]) ) {
            console.log("true");
        } else {
            console.log("false");
        }
    }

}

pairChecker(pairs1A, pairs1B, pairs2A, pairs2B);