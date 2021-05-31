"use strict";
exports.__esModule = true;
var products_1 = require("./products");
var productName = 'fanny pack';
var product = products_1["default"].filter(function (product) {
    return product.name === productName;
})[0];
console.log(product);
if (products_1["default"][0].preOrder === 'true') {
    console.log('We will send you a message when your product is on its way.');
}
