import products from './products';

const productName: string = 'fanny pack';

const product = products.filter(product => 
product.name === productName)[0];

console.log(product);

if(products[0].preOrder === 'true') {
    console.log('We will send you a message when your product is on its way.');
}