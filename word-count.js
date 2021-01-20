

function wordcount(str) {

    var count= 0;

    for(var i = 0 ; i < str.length ; i++) {

        var word = str[i];
        if(word == " "){
            count++;
        }

    }

    return count ;

}
var str = " I am a very good boy. I read everyday";
var result = wordcount(str);
console.log(result);