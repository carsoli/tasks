module.exports.product = function(id, name, price){
    this.id = id;
    this.name = name;
    this.price = price;
}


//private
module.exports.item = function(product, opts){
    this.product =  new product(product.id, product.name, product.price);  
    if(opts['count']){// method overloading
        this.count = opts['count']; 
        this.price = (product.price)*(opts['count']);
    }else{
        this.count = 1;
        this.price = (product.price)*1; //compound price of this item
    }
}


module.exports.cart = function(){
    this.items = [];
}


module.exports.getItems = function(){
    return this.items;
}


module.exports.hasProduct = function(product){
    this.items.forEach((item)=>{
        if(item.product.id == product.id)
            return true;
    }); 
    return false;    
}


module.exports.addItem= function(product){
    this.items.forEach((item)=>{
        if(item.product.id == product.id){
            item.count++; 
            item.price += product.price;
            return;
        }
    });
    // var newProduct = new product(product.id, product.name, product.price);
    var newItem = new item(product, {});
    this.items.push(newItem);
    return;
}


module.exports.removeItem = function(product){
    this.items.forEach((item,index)=>{
        if(item.product.id == product.id){
            if(item.count>0){
                item.count--; 
                item.price -= product.price;
            }else{
                this.items.splice(index,1);
            } 
         return;   
        }
    });
    console.log("attempting to remove an item that does not exist in cart");
    return;
}


module.exports.removeProduct = function(product){
    this.items.forEach((item,index)=>{
        if(item.product.id==product.id){
            this.items.splice(index,1);
            return;
        }
    });
    console.log("attempting to remove an item that does not exist in cart");
    return;
}



module.exports.getItem = function(product){
    this.items.forEach((item)=>{
        if(item.product.id == product.id)
        {
            return item;
        }
    });
    return null;
}


module.exports.getTotal = function(){
    var total;
    this.items.forEach((item)=>{
        total+= item.price;//compoud price of each item
    });
    return total;
}


module.exports.clearCart = function(){
    this.items.forEach((item)=>{
        this.items.pop();
    });
}
