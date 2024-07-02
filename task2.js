// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
function multiplyNumbers(number){
if(number % 2 != 0){
   var result = number * 2;
}
else if(number % 2 == 0){
    result = number / 2;
}
return result;
}

console.log(multiplyNumbers(6))