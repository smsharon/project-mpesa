const mpesaPin = 2222
let mpesaBalance = 6270
let bNumbers = [247247, 522522, 888888, 220220, 501900]
function safaricomMpesa(){

    let menu =prompt("1. Send money\n 2. Withdraw cash\n 3. Buy airtime\n 4.Lipa na M-PESA")
    if (menu == 4){
            let lipaNaMpesa = prompt("1. Paybill\n 2. Buy Goods\n 3. pochi\n ")
            if(lipaNaMpesa == 1){
                let bizNumber = prompt("Enter business number");
                let parsedNumber = parseInt(bizNumber);
                let lengthBizNumber = bizNumber.toString().length;
                // integer, 4-6 digits, 

                if(Number.isInteger(parsedNumber) && lengthBizNumber >= 5 && lengthBizNumber <= 6) {
                   if( bNumbers.includes(parsedNumber))
                   {
                    let accountNumber = prompt("Enter account Number");
                    if(accountNumber > 0 ){
                        let amount = prompt("Enter amount");
                    let parsedAmoutnt = parseInt(amount);
                        if(parsedAmoutnt <= mpesaBalance && Number.isInteger(parsedAmoutnt)){
                            let confirmation = confirm("Confirm transactions");
                            // console.log("yes");
                            if(confirmation = true){
                                let pin = prompt("Enter pin")
                                if(mpesaPin == pin ){
                                     mpesaBalance = mpesaBalance - parsedAmoutnt;
                                     alert("thankyou for transactive with us")
                                     console.log(mpesaBalance);
                                }
                                else{
                                    alert("Try later")
                                }
                                // mpesaBalance = mpesaBalance - parsedAmoutnt;
                                // console.log(mpesaBalance);
                            }else{
                                alert("BYE")
                            }
                        }
                    // while (parsedAmoutnt <= mpesaBalance && parsedAmoutnt > 0){
                    //     mpesaBalance = mpesaBalance - parsedAmoutnt;
                    // }
                    
                    }else{
                        alert("Insufficient Amount");
                    }
                    
                   }else{
                    alert("Invalid input");
                   }
                    
                }else {
                    alert("coming soon"); 
                }

            }else if(lipaNaMpesa == 2){
                alert("coming soon");
            }
            
    }else{
        alert("Page under construction");
            
    }
            
}
    // return for safaricomMpesa()

safaricomMpesa();