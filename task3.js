// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
var sum= 0;
function make_avg(numbers){
    var size = numbers.length;
    console.log(size);
    for(var number of numbers){
        sum += number;
    }
   var average = sum / size;
   return average;
}
numbers = [2,3,4,5];
console.log(make_avg(numbers))