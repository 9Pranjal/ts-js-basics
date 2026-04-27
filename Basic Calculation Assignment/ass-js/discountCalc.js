let purchase_amount = 3000;
let total_amount;
if(purchase_amount > 5000){
    total_amount = purchase_amount - (purchase_amount * 0.15);
    console.log("bill discount: ", total_amount);
}else{
    total_amount = purchase_amount - (purchase_amount * 0.05);
    console.log("bill  discount: ", total_amount);
}