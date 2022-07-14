// var a=require("readline-sync")
// var num=a.questionInt("enter the number-:")
// var num1=a.questionInt("enter the number-:")
// var symbol=a.question("enter the number-:")
// if (symbol=="+") {
//     console.log(num+num1)
// }
// else if (symbol=="-") {
//     console.log(num-num1)
// }
// else if (symbol=="*") {
//     console.log(num*num1)
// }
// else if (symbol=="%"){
//     console.log(num%num1)
// }
// else if (symbol=="**"){
//     console.log(num**num1)
// }
// else if (symbol==Math.floor(num1/num)){
//     console.log(symbol)
// }

// else{
//     console.log("error")
// }


let result;
a=require("readline-sync")
const operator=a.question('Enter operator ( either +, -, * or / ): ')
const number1 = a.questionInt('Enter first number: ')
const number2 = a.questionInt('Enter second number: ')

switch(operator) {
    case '+':
        result = number1 + number2;
        console.log(`${number1} + ${number2} = ${result}`);
        break;
    case '-':
        result = number1 - number2;
        console.log(`${number1} - ${number2} = ${result}`);
        break;
    case '*':
        result = number1 * number2;
        console.log(`${number1} * ${number2} = ${result}`);
        break;
    case '/':
        result = number1 / number2;
        console.log(`${number1} / ${number2} = ${result}`);
        break;

    default:
        console.log('Invalid operator');
        break;
}