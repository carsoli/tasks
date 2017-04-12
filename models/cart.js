var mongoose = require('mongoose');
var Schema = mongoose.Schema();

var productSchema = new Schema({ 
        id: { 
            type: String,
            unique: true
            }, 
        name: String,
        price: Number
});


productSchema.methods.createProduct = function(newProduct,callback){
    newProduct.save(callback);
}


module.exports = mongoose.model('Product', productSchema); 


var cartSchema = new Schema({
    items: [{
            product:
                    {
                        type: mongoose.Schema.Types.ObjectId,
                        ref: 'Product' 
                    },
            count:  
                    {       
                        type: Number, 
                        default: 0
                    },
            price:  
                    {
                        type: Number,
                        default: (product.price)*(product.count) //not sure 
                    }  
            }]
});

var Cart = mongoose.model('Cart', cartSchema);
module.exports = Cart;


/*
    getItems()
    returns all items in the cart
    @params none
    returns result: []
*/
module.exports.getItems = function()
{
    Cart.find({}, (err, result)=> 
    {
        if(err || !result)
        {
            console.log("error: " + err + ", result: " + result);
            return;
        }  
        else
        {
            console.log("Items: "+ result);
            return result;
        }
    });   
};


/*
    hasProduct()
    checks if a product exists in a cart using its id (not _id)
    @params product: Object 
    returns boolean
*/
module.exports.hasProduct = function(product)
{ 
  Cart.find({})
    .populate({path: 'items.product', match: {id: {$eq: product.id}} })
    .exec((err, result) =>{
        if(err)
        {
            console.error(err.stack);
            return false; 
        }
        if(!result) 
        {
            console.log("No Result Retrieved From Query");
            return false;
        }
        console.log("Product: " + result);
        return true; 
    });
};


/*
    adds a product to the cart (increments the count/ adds a new item)
    @params product: Object
    returns void
*/
module.exports.addItem = function(product){
    if(this.hasProduct(product))
    {
         Cart.find({})
            .populate({path: 'items.product', match: {id: {$eq: product.id}} })
            .exec((err, result) =>{
                if(err || !result)
                {
                    console.log("error: " + err + "or no result: " + result);
                    return;
                }
                else
                {
                    Cart.findOneAndUpdate({'items.product._id': result._id},  );
                }

        });
    }
    else 
    {
        var newItem = { product: product , count: 1, price: 1* product.price};
        newItem.save((saveErr, saveRes) => {
            if(saveErr)
            {
                console.log("couldn't save new Item" + saveErr.message);
                return;
            }
            if(!saveRes)
                console.log("Nothing was saved, result: " + saveRes);

            console.log("Item Created Successfully: " + saveRes);
        });        
    }
};


/*
    decrements the count of an item in the cart or completely removes it(if count ==1)
    @params: product: Object
    @returns: void
*/
module.exports.removeItem = function(product){
    if(this.hasProduct(product))   
    {

    }
};


/*

*/
module.exports.removeProduct = function(product){
    Cart.findOne({'items.product.id': product.id},(err,result)=>{
        if(err)
        {

        }
        else
        {

            console.log("removed product: " + result);
        }
    })
};

 
/*FIX
    gets item from cart by its id
    @params: product: Object
    @returns result(if any) or null in case of no match/ error 
*/ 
module.exports.getItem = function(product){
    Cart.find({'items.product.id': product.id}, (err, result) => 
    {
        if(err || !result)
        {
            console.log("error: " + err + ", or result is: " + result);
            return null; 
        }
        else 
        {
            console.log("Item Found Successfully in Cart: " + result);
            return result;
        }
    });
}


/*
    gets total price of all items in the Cart
    @params: none
    @returns totalPrice : Number
*/
module.exports.getTotal = function(){
    var totalPrice= 0;

    this.items.forEach((item)=> {
        totalPrice += item.price;  //item.price is the compound price
    });

    return totalPrice;
};


/*
    removes all items from cart
    @params: none
    @returns boolean (removed Successfully:true / error or cart was already empty:false)
*/
module.exports.clearCart = function(){
    Cart.remove({},(err, result) =>{
        if(err || !result)
        {
            console.log("Error: " + err + ", Result: " + result);
            return false;
        }
        else 
        {
            console.log("Items Deleted Successfully: " + result);
            return true; 
        }
    });
};


