var exp = require('./cart.js');

var p1 = exp.Product.create(1, 'cheese', 20);
var p2 = exp.Product.create( 2, 'milk', 10);
var p3 = exp.Product.create(3, 'kitkat', 5);
var c1 = exp.Cart.create();

c1.addItem(p1); 
c1.addItem(p1);
c1.addItem(p1);
c1.addItem(p1);
c1.addItem(p2);
c1.addItem(p2);
c1.addItem(p2);
c1.addItem(p3);

// console.log(c1.hasProduct(p1)); 
// console.log(c1.getItems()); 
// console.log(c1.getTotal()); //110
// console.log(c1.removeItem(p2)); //returns updated cart

// console.log("********************************************");
// c1.removeItem(p3); //returns updated cart
// c1.removeItem(p2);
// console.log(c1.getItems());

// console.log("********************************************");
// console.log(c1.getItem(p1)); 

// console.log("********************************************");
// c1.removeProduct(p2);
// console.log(c1.getItem(p2)); 
// console.log(c1.getItems());

// console.log("********************************************");
// c1.clearCart();
// console.log(c1.getItems()); //empty array 