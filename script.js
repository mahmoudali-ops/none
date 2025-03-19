function spreadOperatorExample(){
    var arr  = [1,2,3,4,5,6,7]
    var [a,b,...arr]=arr
    document.getElementById("mydiv1").innerHTML = `Spread Operator: ${ [a,b,...arr]} <br><hr><br>`;
}
function swapVariables(){
    var a=1 , b=2;
    [a,b]=[b,a];
    document.getElementById("mydiv2").innerHTML =  `Swapped Values: a = ${a}, b = ${b} <br><hr><br>`;
}
function findMinMax() {
    var arr = [1, 2, 12,9, 51];
    var min = Math.min(...arr);
    var max = Math.max(...arr);
    document.getElementById("mydiv3").innerHTML = `Min: ${min}, Max: ${max} <br><hr><br>`;
}
function findMinMaxDinamically(...arr) { 
    var min = arr[0] , max = arr[0]; 
    for (var num of arr) {
        if (num < min) min = num;
        if (num > max) max = num;
    }
    document.getElementById("mydiv4").innerHTML = `Min: ${min}, Max: ${max} <br><hr><br>`;
}
function validateTwoParameters(a, b) {
    try {
        if (arguments.length !== 2) {
            throw "Function accepts only 2 parameters."; 
        }
        document.getElementById("mydiv5").innerHTML = `Valid Input: ${a}, ${b} <br><hr><br>`;
    } catch (error) {
        document.getElementById("mydiv6").innerHTML = `Error: ${error} <br><hr><br>`;
    }
}
function addNumbers(...nums) {
    try {
        if (nums.length === 0 || !nums.every(num => typeof num === "number")) {
            throw "Invalid input, numbers only!";
        }

        var sum = 0;
        for (var num of nums) {
            sum += num;
        }

        document.getElementById("mydiv7").innerHTML = `Sum: ${sum} <br><hr><br>`;
    } catch (error) {
        document.getElementById("mydiv8").innerHTML = `Error: ${error} <br><hr><br>`;
    }
}
function reverseArray(...elements) {
    var reversed = elements.reverse();
    document.getElementById("mydiv9").innerHTML = `Reversed: ${reversed} <br><hr><br>`;
}
function reverseParams (...args)  {
    var reversedArray = [];
    for (var i = args.length - 1; i >= 0; i--) {
        reversedArray.push(args[i]);
    }
    document.getElementById("mydiv10").innerHTML = `Reversed: ${reversedArray} <br><hr><br>`;
};
  
 
  