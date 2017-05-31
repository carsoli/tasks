// var chai = require('chai'); 
// var expect = chai.expect; 
var assert = require('assert');
var exp = require('../cart.js');

/* to test the product prototype {create} */
describe('Product', function(){
  describe('#create', function(){
    it('should create a product object with an id, name, and price', function(){
      var testProduct = exp.Product.create(1, 'cheese',20);
      assert.deepEqual({ id: 1, name: 'cheese', price: 20 }, testProduct);
    })
  })
});

/* to test the cart prototype {create, getItems, hasProduct,
addItem, removeProduct, removeItem, getItem, getTotal, clearCart} */

describe('Cart', function() {
  describe('#create', function() {
    it('creates a cart object; an empty array of items', function() {
      assert.deepEqual({ items: []},  exp.Cart.create());
    });
  });


  describe('#getTotal', function() {
    it('returns total price of items in cart', function() {
      var p1 = exp.Product.create(1, 'cheese', 20), 
          p2 = exp.Product.create( 2, 'milk', 10), 
          p3 = exp.Product.create(3, 'kitkat', 5),
          c1 = exp.Cart.create();
      
      c1.addItem(p1); c1.addItem(p1); c1.addItem(p3);
      c1.addItem(p2); c1.addItem(p2); c1.addItem(p2);

      assert.equal(75, c1.getTotal());
    });
  });


  describe('#hasProduct', function() {
    it('should return true when cart has product, false o.w', function() {
      var p1 = exp.Product.create(1, 'cheese', 20),
          p2 = exp.Product.create( 2, 'milk', 10),
          c1 = exp.Cart.create();
      c1.addItem(p1);

      assert.equal(true,  c1.hasProduct(p1));
      assert.equal(false, c1.hasProduct(p2));
    });
  });


  describe('#addItem', function(){
    it('should add products to cart & return updated cart', function(){

      var c1 = exp.Cart.create(),
          p1 = exp.Product.create(1, 'cheese', 20),
          p2 = exp.Product.create( 2, 'milk', 10);

      c1.addItem(p1); c1.addItem(p1); c1.addItem(p2);
      assert.deepEqual([{ product: { id: 1, name: 'cheese', price: 20 }, count: 2, price: 40 }, { product: { id: 2, name: 'milk', price: 10 }, count: 1, price: 10} ], c1.items);

    });
  });


  describe('#getItems', function(){
    it('returns all items in cart', function(){
      var c1 = exp.Cart.create(),
          p1 = exp.Product.create(1, 'cheese', 20),
          p2 = exp.Product.create( 2, 'milk', 10);
      c1.addItem(p1); c1.addItem(p1); c1.addItem(p2);

      assert.deepEqual([{ product: { id: 1, name: 'cheese', price: 20 }, count: 2, price: 40 }, { product: { id: 2, name: 'milk', price: 10 }, count: 1, price: 10} ], c1.getItems());
    });
  });
  

  describe('#clearCart', function(){
    it('clears cart', function(){
      var c1 = exp.Cart.create(),
          p1 = exp.Product.create(1, 'cheese', 20),
          p2 = exp.Product.create( 2, 'milk', 10);
      c1.addItem(p1); c1.addItem(p1); c1.addItem(p2);
      c1.clearCart();

      assert.deepEqual( [], c1.items);
    });
  });


    describe('#removeProduct', function(){
      it('removes a product completely from a cart (if it exists)', function(){
        var c1 = exp.Cart.create(),
            p1 = exp.Product.create(1, 'cheese', 20),
            p2 = exp.Product.create( 2, 'milk', 10);
        c1.addItem(p1);

        assert.deepEqual([] , c1.removeProduct(p1));
        assert.deepEqual([], c1.removeProduct(p2)); //kaselt akhaleeha trg3 error message :3
      });
    });


    describe('#removeItem', function(){
      it('decrement the item count in the cart or completely removes it', function(){
        var c1 = exp.Cart.create(),
            p1 = exp.Product.create(1, 'cheese', 20),
            p2 = exp.Product.create(2, 'milk', 10),
            p3 = exp.Product.create(3, 'kitkat', 5);
        c1.addItem(p1); c1.addItem(p1); c1.addItem(p1); c1.addItem(p2); c1.addItem(p2); c1.addItem(p3);
        c1.removeItem(p1); c1.removeItem(p2); c1.removeItem(p3);

        assert.deepEqual([ { product: { id: 1, name: 'cheese', price: 20 }, count: 2, price: 40 }, 
                            { product: { id: 2, name: 'milk', price: 10 }, count: 1, price: 10 } ]
                            , c1.items);
      });
    });


    describe('#getItem', function(){
      it('if a product exists in a cart, gets its item. otherwise, returns errorMessage', function(){
        var c1 = exp.Cart.create(),
            p1 = exp.Product.create(1, 'cheese', 20),
            p2 = exp.Product.create(2, 'milk', 10);
        c1.addItem(p1); c1.addItem(p1); c1.addItem(p2);

        assert.deepEqual({ product: { id: 1, name: 'cheese', price: 20 }, count: 2, price: 40 }
                          , c1.getItem(p1));
      });
    });


});
