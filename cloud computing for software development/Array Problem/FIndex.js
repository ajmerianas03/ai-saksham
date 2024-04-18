// 6. Find Index of Element:
// Create a function to find the index of a specific element in an array. If the element is not present, return -1.
function findIndexOfElement(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; 
        }
    }
    return -1; 
}

const array = [10, 20, 30, 40, 50];
const target = 30;
console.log(findIndexOfElement(array, target)); 
