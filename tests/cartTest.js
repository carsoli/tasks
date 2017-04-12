var mongoose = require('mongoose');
var Cart = mongoose.model('Cart');

var product1 = { id: "1A", name: "Galaxy Jewels" , price: "50.5"}; 
var product2 = { id: "2A", name: "Cadbaurary Oreo" , price: "7.5"};

var cart1 = new Cart();

// cart1.addItem(product1);
// console.log(cart1.hasProduct(product1));

// cart1.addItem(product1);
// console.log(cart1.getItems().toString());

// cart1.removeItem(product1);
// console.log(cart1.getItems().toString());

// cart1.addItem(product2);
// console.log(cart1.getItems());

// console.log(cart1.getTotal());


// cart1.clearCart();
// console.log(cart1.getItems().toString());


