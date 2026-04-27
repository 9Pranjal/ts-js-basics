let purchase: number = 6000;
let discount: number;

if (purchase > 5000) {
    discount = purchase * 0.15;
} else {
    discount = purchase * 0.05;
}

console.log("Discount:", discount);