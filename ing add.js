b=require("readline-sync")
var a=b.question("enter the alphabeat-:")
if (a.includes('ing')){
    console.log(a.replace('ing','ly'))
}
else if (a.includes('ly')){
    console.log(a.replace('ly','ing'))
}
else{
    console.log("nothing")
}