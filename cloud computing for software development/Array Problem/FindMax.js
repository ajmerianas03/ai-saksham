//Find Maximum Element
const array=[4,55, 6,3];
 let max = 0;

 for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
        max = array[i];
    }
}
console.log(max); 