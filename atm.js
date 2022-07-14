console.log("welcome to the state bank of india")
var a=require("readline-sync")
var ATM_card=a.question("enter your card-:")
if (ATM_card=="debit card" || ATM_card=="credit card"){
    console.log(ATM_card,"your are card is execuded")
    language=a.question("enter your language :-:")
    if (language=="english" || language=="hindi" || language=="urdu"){
        console.log(language,"it is selected")
        account=a.question("enter your account : - ") 
        if (account=="saving" || account=="salrid"){
            console.log(account,"enter your account")
            pin_number=a.question("enter your pin_number:- ") 
            if (pin_number=="123456"){
                console.log(pin_number,"enter your pin_number")
                amount=a.question("enter your amount:- ") 
                if (amount==2000||amount==12345678){
                    console.log(amount,"yes I goted amount")
                    remove=a.question("enter your amount:- ")
                    if (remove=="card is remove"){
                        console.log(yes,"your card is remved")
                    }else{
                        console.log("your atm will be succesfull tranjaction")
                    }
                }else{
                    console.log("everything")
                }
            }else{
                console.log("no")
            }
        }else{
            console.log("yes")
        }
    }else{
        console.log("no")
    }
}else{
    console.log("nothing")
}       
                

