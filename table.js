var b=require("readline-sync")
var a=b.questionInt("enter the number-:")
i=1
if(a<=100){
    console.log(a,"*",i,"=",a*(i))
    console.log(a,"*",i+1,"=",a*(i+1))
    console.log(a,"*",i+2,"=",a*(i+2))
    console.log(a,"*",i+3,"=",a*(i+3))
    console.log(a,"*",i+4,"=",a*(i+4))
    console.log(a,"*",i+5,"=",a*(i+5))
    console.log(a,"*",i+6,"=",a*(i+6))
    console.log(a,"*",i+7,"=",a*(i+7))
    console.log(a,"*",i+8,"=",a*(i+8))
    console.log(a,"*",i+9,"=",a*(i+9))
}
else{
    console.log("nothing")
}