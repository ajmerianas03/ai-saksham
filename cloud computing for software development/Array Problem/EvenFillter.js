//Filter Even Numbers
const array=[4,55, 6,3,5,8];
let evenNumbers=[];
 
for (let i = 0; i < array.length; i++){
    if (array[i] % 2 === 0) {
        evenNumbers.push(array[i]);
    }
}

console.log(evenNumbers);