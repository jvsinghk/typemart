"use strict";
exports.__esModule = true;
var products_1 = require("./products");
var productName = 'fanny pack';
var shipping;
var taxPercent;
var taxTotal;
var total;
var shippingAddress = '789 Broadway, New York City, New York';
var product = products_1["default"].filter(function (product) {
    return product.name === productName;
})[0];
console.log(product);
if (product.preOrder === 'true') {
    console.log('We will send you a message when your product is on its way.');
}
if (Number(product.price) > 25) {
    shipping = 0;
    console.log('We provide free shipping for this product');
}
else {
    shipping = 5;
}
if (shippingAddress.match('New York')) {
    taxPercent = 0.1;
}
else {
    taxPercent = 0.05;
}
taxTotal = Number(product.price) * taxPercent;
total = Number(product.price) + taxTotal + shipping;
console.log("\nProduct:  " + product.name + "\nAddress:  " + shippingAddress + "\nPrice:    $" + product.price + "\nTax:      $" + taxTotal.toFixed(2) + "\nShipping: $" + shipping.toFixed(2) + "\nTotal:    $" + total.toFixed(2) + "\n");
