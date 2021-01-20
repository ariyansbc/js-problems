
function arraySum(num) {

    let sum = 0;

    for(let i = 0 ; i < num.length ; i++) {

        let element = num[i];
        sum = sum + element;
    }

    return sum;

}
var numbers = [5,5,7,3,6,10]
var result = arraySum(numbers);
console.log(result);