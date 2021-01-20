var businessMan = 4200;
var jobholder = 3500;
var sachib = 2500;

var max = Math.max(businessMan,jobholder,sachib);
console.log("max value:", max);
var min = Math.min(businessMan,jobholder,sachib);
console.log("min value:", min);

if(businessMan > jobholder) {
    if(businessMan > sachib) {
        console.log("businessMan is Big");
    }
    else {
        console.log("sachib is Big");
    }

}
else {
    if(jobholder > businessMan) {
        if(jobholder > sachib) {
            console.log("Job holder is big")
        }
        else {
            console.log("sachib is Big");
        }
    }
    

}