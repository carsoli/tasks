var Product ={
    create: function(id, name, price){
        var instance = Object.create(this); //Object.create(proto, [properties](optional));
        instance.id = id; 
        instance.name = name; 
        instance.price = price;
        return instance; 
    }    
}


var Item = {
    create: function(product, opts){
        var instance = Object.create(this); 
        instance.product = product;//Product.create(product.id, product.name, product.price);
        if(opts['count']){// method overloading
            instance.count = opts['count']; 
            instance.price = (product.price)*(opts['count']);
        }else{
            instance.count = 1;
            instance.price = (product.price)*1; //compound price of this item
        }
        return instance;
    } 
}


var Cart =  {
    create: function(){
        var instance = Object.create(this);
        instance.items = [];
        return instance; 
    },


    getItems: function(){
        return this.items;
    },


    hasProduct: function(product){
        var flag = false;
        this.items.forEach(function(item){
            // console.log("item id: " + item.product.id);
            // console.log("input id: " +product.id);
            if(item.product.id == product.id)
                flag = true;
        }); 
        return flag;    
    },


    addItem: function(product){
        // console.log(this);
        var exists= false;
        this.items.forEach(function(item){
            if((item.product.id == product.id) &&(exists==false)){
                item.count++; 
                item.price += product.price;
                exists = true; 
            }
        });
        if(exists ==false){
            var newItem = Item.create(product, {});
            // console.log("new item is: "+ newItem.product.id);
            this.items.push(newItem);
        }
    },


    removeItem: function(product){
        var nremoved =0;
        this.items.forEach((item,index)=>{
            if(item.product.id == product.id){
                if(item.count>0){
                    item.count--; 
                    item.price -= product.price;
                }else{
                    this.items.splice(index,1);
                }    
                nremoved++;
            }
        });
        if(nremoved ==0)
            console.log("Attempting to remove an item that does not exist in Cart");
    },


    removeProduct: function(product){
        var nremoved=0;
        this.items.forEach((item,index)=>{
            if(item.product.id==product.id){
                nremoved+= item.count;
                console.log("Number of items removed = " + nremoved);
                this.items.splice(index,1);
            }
        });
        if(nremoved ==0)
            console.log("Attempting to remove an item that does not exist in Cart");
    },


    getItem: function(product){
        var output = null;
        this.items.forEach(function(item){
            if((item.product.id == product.id) && (output == null)){
                output = item;
            }
        });
        return output;
    },


    getTotal: function(){
        var total= 0;
        this.items.forEach((item)=>{
            total+= item.price;//compoud price of each item
        });
        return total;
    },


    clearCart: function(){
       this.items.forEach((item)=>{
            this.items.pop();
        });
    }
}

module.exports = {Product, Item, Cart};
