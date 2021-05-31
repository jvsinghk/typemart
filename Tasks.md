Tasks
0/13 Complete
Mark the tasks as complete by checking them off
1.
Welcome to TypeMart’s codebase! Currently it consists of two files:

A products.ts file, which has a list of products we will sell.
An index.ts file, which we can use to create our a purchase flow for our users.
Take a moment to look at products.ts to get familiar with our products, then start by importing products from products.ts into index.ts.


Hint
Since products.ts exports its list of products with export default, we can import the list with:

import products from './products';
2.
Next, we need to store the name of the product the user is trying to find.

Declare a variable named productName, annotate it with the appropriate type, and set its value to one of the product names in products.ts. Feel free to choose any of the products.


Hint
One of the product names from products.ts is a 'fanny pack'. Since that value is a string, we can annotate and declare the productName variable like this:

const productName: string = 'fanny pack';
3.
Now that we have the product’s name in a variable, we need to find it by its name from our list of products. Use any method to find a product inside products that matches the string stored in the productName variable.

Once you have found the matching product, store that product in a variable named product.


Hint
There are many ways we could accomplish this. One way is to use the .filter() method to iterate through the products list and find a productName match on a product’s .name property, then take the first result:

const product = products.filter(product => product.name === productName)[0];
JavaScript also includes a .find() method.

const product = products.find(product => product.name === productName);
Apart from .filter() and .find(), we could also use .forEach() or a for loop.

4.
Let’s verify we found the correct product from the last step.

Use console.log() to print the product variable’s value.

Save your file in the code editor, run tsc on the command line to compile your code into JavaScript, then run node index.js to see the output. Verify that you see an object printed in the console.


Hint
If you picked 'fanny pack' as the productName, you’ll see an object like this printed to the command line:

{ name: 'fanny pack', price: '30', preSale: 'true' }
5.
Now that we selected a product, we have some additional logic to implement.

We have a few items that are available for pre-order—shoppers can purchase them now, and we will ship them at a later date. If this is the case for a product, we want to notify the customer that we’ll send them a message when their product ships.

In index.ts, write a conditional that checks if the .preOrder property is true on the product, then log a message to the console to tell the customer that we’ll send them a message when it’s on the way.


Hint
Be careful, you’ll notice that the .preOrder properties have values of stings: 'true' or 'false'. You’ll need to convert the strings into booleans first, otherwise, you’ll get errors!

Then, you could write a conditional like this to check:

if (product.preOrder === true) {
  console.log('We will send you a message when your product is on its way.');
}
You will run this code in the next step.

6.
Once you’ve implemented this condition, you should test that it’s working as expected. Make sure that the 'fanny pack' product makes the message print and that the 'beanie' product does not (since it’s not on pre-order).

Use tsc to compile your code, then node index.js to run your program.


Hint
Try using the === operator to make sure the preOrder property is true, then use tsc to find any type errors.

Since the data we provided in products.ts has strings as the values of the preOrder properties, both 'true' and 'false' are truthy values if you write a condition like if (product.preOrder).

A great way to make this condition work as expected would be to change the preOrder values in products.ts to be booleans. Another way could be to write a conditional that makes sure that product.preOrder is the string 'true'.

7.
Now we’re ready to start putting together all the data we’ll need to provide the shopper a receipt. The receipt will show the shipping address, price, tax, shipping cost, and total cost.

Declare four variables named: shipping (number), taxPercent (number), taxTotal (number), and total (number)—make sure to annotate all their types.


Hint
We can annotate variables as specific types before we assign them values like this:

let shipping: number;
let taxPercent: number;
let taxTotal: number;
let total: number;
To make your code readable, try putting these variable declarations at the top of the file right next to the productName declaration.

8.
Declare a variable shippingAddress. Its value should be a string containing the customer’s address. Make sure to annotate it correctly and assign shippingAddress a value of an address in a string.


Hint
We can add a value to the shipping address variable with an equals sign after the annotated type:

const shippingAddress: string = '575 Broadway, New York City, New York';
9.
If the price of an item is over $25, we will provide free shipping.

Write a conditional that sets shipping to 0 if the price of the product is 25 or over. Include a console.log() stating that we provide free shipping for this product. If the product is under $25, set the value of shipping to 5.

Use tsc and node index.js to verify that 'fanny pack' prints the message about free shipping and 'shirt' does not.


Hint
If we write code like if (product.price > 25), you’ll notice that tsc index.ts reports a type error because the prices in products.ts have string values. To solve this error, we could use the Number constructor to transform product.price into a number or we could change the values in products.ts to be number types.

10.
Since our shop operates out of New York City, we’re required to pay extra tax when someone from New York buys a product from TypeMart.

If the shipping address contains the value 'New York', then we need to set the taxPercent to 0.1 (a shocking 10%), otherwise, the taxPercent should be .05.

To check if the shippingAddress contains 'New York' you can use the .match() method to check.


Hint
When writing the conditional, we can utilize JavaScript’s .match() method. .match() is a string method in JavaScript and can detect if a string contains another string. We can use to see if the shipping address contains 'New York' like this:

if (shippingAddress.match('New York')) {
  taxPercent = 0.1;
}
Remember to also add in the else portion!

11.
Next, calculate the total.

First, multiply the product.price by the taxPercent, then assign that value to the taxTotal variable.

Then, add together the product.price, taxTotal, and shipping, and assign it to the total variable.

Run tsc to check for any type errors.


Hint
Earlier if you transformed the product.price into a number with the Number constructor, you’ll notice that you’ll have to do the same thing here, like this:

taxTotal = Number(product.price) * taxPercent;
total = Number(product.price) + taxTotal + shipping;
One advantage of changing the underlying data to have the correct types is that there are fewer places to transform when you’re writing your program’s logic. If we change the price values in products.ts to be number values instead of strings, we can write this:

taxTotal = product.price * taxPercent;
total = product.price + taxTotal + shipping;
12.
Now that we have all the required data for the receipt, use console.log() to print:

Product name
Shipping address
Price of the product
Tax total
Shipping
Total amount
Then run tsc and node index.js to verify that the receipt is correct.

For example, the total cost for a 'fanny pack' bought inside New York should be $33.00, while a 'tote bag' bought outside of New York should be $26.00.


Hint
We can print a receipt with the following code:

console.log(`
Product:  ${product.name}
Address:  ${shippingAddress}
Price:    $${product.price}
Tax:      $${taxTotal.toFixed(2)}
Shipping: $${shipping.toFixed(2)}
Total:    $${total.toFixed(2)}
`);
13.
Congratulations on completing this project! You practiced annotating types, fixing type errors with tsc, and creating a type safe program. The management at TypeMart is thrilled; we hope to see you at the grand opening!