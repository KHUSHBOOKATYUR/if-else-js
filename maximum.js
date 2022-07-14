d=require("readline-sync")
a=d.questionInt("enter the number-:")
b=d.questionInt("enter the number-:")
c=d.questionInt("enter the number-:")
if (a>b && c<a){
    console.log(a,"is greater than")
}
else if (b>a && b>c){
    console.log(b,"is greater than")
}
else if (c>b && c>a){
    console.log(c,"is greater than")
}
else{
    console.log("nothing")
}