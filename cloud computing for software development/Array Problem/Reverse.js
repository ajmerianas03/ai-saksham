// 4. Reverse Array:
// Implement a function to reverse the order of elements in an array.


const reverseArray = arr => {
    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
        
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;

        start++;
        end--;
    }

    return arr;
};

const array =[1,2,3,4,5,7,8,99];
console.log(reverseArray(array));


