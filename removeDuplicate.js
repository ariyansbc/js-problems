
var uniqueArray = [];
var numbers  = [55,4,6,4,9,3,5,3,2,4,7];

    for(let i = 0 ; i < numbers.length ; i++) {
        var element = numbers[i];
        var index = uniqueArray.indexOf(element);

        if(index == -1) {
            uniqueArray.push(element);
        }
    }
  

console.log(numbers);
console.log(uniqueArray);
