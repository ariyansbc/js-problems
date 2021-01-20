
function getLargest(num) {

    var large = num[0];

    for(let i = 0 ; i < num.length ; i++) {
        var element = num[i];
        if(element > large) {
            large = element ;
        }
    }
    return large ;
}
var numbers = [22,5,46,99,55,88,40,47,65]
var result  = getLargest(numbers);
console.log('largest result value:' , result);

var studentvalues = [42,36,74,66,100,210,320];
var studentResult = getLargest(studentvalues);
console.log('largest student value:' , studentResult);