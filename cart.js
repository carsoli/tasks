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
        // return this.items.filter(function(item){
            // return item.product.id == product.id;
            // }).length > 0 ;  
        // })
        
        /* ============== alternatively ===================*/
        return this.items.find(function(item){
            return item.product.id == product.id; 
            }) != null ;
    },


    addItem: function(product){
        // if(this.hasProduct(product)){
        //     return this.items.map(function(item){
        //         if(item.product.id == product.id){
        //             item.count ++; 
        //             item.price += product.price; 
        //         }
        //     });
        // } else{
        //     var newItem = Item.create(product, {});
        //     this.items.push(newItem);
        // }

        /*=============== alternatively ===================*/
        var index = this.indexOfProduct(product);
        if(index == -1){
            var newItem = Item.create(product, {});
            this.items.push(newItem);
        }else{
            this.items[index].count ++;
            this.items[index].price += product.price;
        }
    },


    removeProduct: function(product){
        this.items = this.items.reduce(function(prevValue, currValue){
            if(currValue.product.id != product.id){
                return prevValue.concat(currValue);
            }
                return prevValue;  
        }, []);
    
        return this.items;
    },


    removeItem: function(product){
        if(this.hasProduct(product)){
            this.items = this.items.reduce(function(prevValue, currValue){
                if(currValue.product.id == product.id){
                    if(currValue.count == 1){ 
                        return prevValue;
                    }else {
                        currValue.count -= 1;
                        currValue.price -= product.price; 
                    } 
                }
                return prevValue.concat(currValue); //in any case other than when product id matches and count =1
            }, []);
        }else
            console.log("product not in cart");

        return this.items; 

        /* ================ alternatively ====================*/
        // var index = this.indexOfProduct(product);
        // if(index != -1){
        //     var item = this.items[index];
        //     if(item.count == 1){
        //         this.items.splice(index,1);
        //     }
        //     else {
        //         this.items[index].count--; 
        //         this.items[index].price -= product.price; 
        //     }
        // }
    },


    getItem: function(product){
        if(this.hasProduct(product)){
            return this.items.find(function(item){
                return item.product.id == product.id ;
            });
        }
        console.log("product not in cart");
    },


    getTotal: function(){
        return this.items.reduce(function(total, currValue){
            return total + currValue.price;//compound price of the item
        },0);
    },


    clearCart: function(){
        this.items = [];
    },


    /*helper method*/
    indexOfProduct: function(product){
        var found = -1;

            this.items.forEach(function(item, index){
                if(item.product.id == product.id && found == -1)
                    found = index;
            });
    
        return found;
    }
}




module.exports = {Product, Item, Cart};
//alternatively we can specify explicitly which methods to export from Cart so as not to export the helpers 
