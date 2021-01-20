

function stringReverse(str) {
     var reverse = " ";
    for(let i = 0 ; i < str.length ; i++) {

        var word = str[i];
         reverse = word + reverse;
    }
    return reverse;
}
var str= "jalal";
var result = stringReverse(str);

console.log(result);

// second way

sentense = "jalal";
var reverseSentense = "";
for(var j = sentense.length-1 ; j >= 0 ; j--) {

     reverseSentense = reverseSentense + sentense[j];

}
console.log(reverseSentense);
