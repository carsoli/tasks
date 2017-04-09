var module = require('./cart.js');

var p1 = module.product( 1, 'cheese', 20);
var p1 = module.product( 2, 'milk', 10);

// var p2 = {id: 2,name: 'milk', price: 10};

var c1 = module.cart();

console.log(c1.getItems());

// c1.addItem(p1);
// console.log(c1.hasProduct(p1));

// c1.addItem(p1);
// console.log(c1.getItem(p1));

// c1.removeItem(p1);
// console.log(c1.getItems());

// c1.addItem(p2);
// console.log(c1.getItems());

// console.log(c1.getTotal());

// c1.removeProduct(p1);
// console.log(c1.getItems());

// c1.clearCart();
// console.log(c1.getItems());