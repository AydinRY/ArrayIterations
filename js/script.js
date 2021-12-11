// Filter Custom

function filterCustom(arr, test) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (test(arr[i])) {
            result.push(arr[i])
        }
    }
    return result;
}
function check(value) {
    return value > 31;
}
console.log(filterCustom([12, 23, 45,1 , 18, 100] , check));

// Find Custom

function findCustom(arr, test) {
    for (let i = 0; i < arr.length; i++) {
        if (test(arr[i])) {
            return arr[i]
        }
    }
} 
function check(value) {
    return value >50;
}
console.log(findCustom([12, 23, 45, 1, 18, 100] , check));

// Some Custom

function someCustom(arr, test) {
    for (let i = 0; i < arr.length; i++) {
        if (test(arr[i])) {
            return true
        }
    }
    return false
} 
function check(value) {
    return value >30;
}
console.log("Some over 30 is " + someCustom([12, 23, 45,1 , 18, 100] , check));