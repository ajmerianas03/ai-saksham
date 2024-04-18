// 5. Remove Duplicates:
// Write a function that removes duplicate elements from an array and returns a new array with unique elements.
function removeDuplicates(arr) {
    const uniqueArray = [];
    for (let i = 0; i < arr.length; i++) {
        let isDuplicate = false;
        for (let j = 0; j < i; j++) {
            if (arr[i] === arr[j]) {
                isDuplicate = true;
                break;
            }
        }
        if (!isDuplicate) {
            uniqueArray.push(arr[i]);
        }
    }
    return uniqueArray;
}

const array = [3, 1, 2, 3, 2, 4, 5, 5, 6];
console.log(removeDuplicates(array)); 
