# tasks
#documentation of the methods exported
1)Product Model:
  createProduct()
  @description: 
  @params: newProduct: Object
  @returns void

2)Cart Model:
  getItems()
  @description: returns all items in the cart
  @params none
  @returns result: []

  hasProduct(product)
  @description:checks if a product exists in a cart using its id (not _id)
  @params product: Object 
  @returns boolean

  addItem(product)
  @description: adds a product to the cart (increments the count/ adds a new item)
  @params product: Object
  @returns void

  removeItem(product)
  @description: decrements the count of an item in the cart or completely removes it(if count ==1)
  @params: product: Object
  @returns: void
    
    
    
    
//
    
   getTotal() 
   @description: gets total price of all items in the Cart
   @params: none
   @returns totalPrice : Number
   
   clearCart()
   @description:removes all items from cart
   @params: none
   @returns boolean (removed Successfully:true / error or cart was already empty:false)
