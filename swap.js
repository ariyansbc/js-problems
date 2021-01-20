var a = 5;
var b = 9;

console.log("before swap:", "a=", a , "b=", b);

var temp = a;
    a= b;
    b= temp;
console.log("after  swap:", "a=", a , "b=", b);

// second way
 
var x = 3 ; 
var y = 7;
console.log("before swap:", "x=", x , "y =", y);
x = x+ y;
y = x-y;
x = x - y;
console.log("after  swap:", "x=", x , "y =", y);

// javascript way 

var p = 22;
var q = 44;
console.log("before swap:", "p=", p , "q =", q);
[p,q] = [q,p];
console.log("after swap:", "p=", p , "q =", q);

 