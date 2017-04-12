var exp = require('./cart.js');

var p1 = exp.Product.create(1, 'cheese', 20);
var p2 = exp.Product.create( 2, 'milk', 10);

var c1 = exp.Cart.create();

console.log(c1.getItems()); //initially empty

c1.addItem(p1); 
console.log(c1.getItems()); //should return 1 instance of p1 in cart (*)

console.log(c1.hasProduct(p1)); //should return true
console.log(c1.hasProduct(p2)); //should return false

c1.addItem(p1); 
console.log(c1.getItem(p1)); //1 instance of p1 with count =2 & price = 20*2

c1.removeItem(p1);  //back to (*) --no console log here
c1.removeItem(p2); //but p2 doesn't exist in cart?? (error handled)

console.log(c1.getItems()); //same as (*) --logged

c1.addItem(p2);
c1.addItem(p1);
console.log(c1.getItems()); //2 instances of 2 different products (p1 w/count= 2, p2 w/ count= 1)

console.log(c1.getTotal()); //expected total = 50

c1.removeProduct(p1);
console.log(c1.getItems()); //1 instance of p2

c1.clearCart();
console.log(c1.getItems()); //empty array 
