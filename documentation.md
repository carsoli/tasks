## documentation of the methods exported

/**
 * @name Product.create
 * @description product constructor
 * @param id : number
 * @param name : string
 * @param price : number
 * @returns instance of product: Object 
 */
 
 /**
 * @name Item.create
 * @description item constructor. when passed 1 arg creates an item w/ count 1 (default).
 * when passed 2 args, creates an item with the count and price specified
 * @param product: Product Object 
 * @param count(optional)
 * @returns instance of item: Object 
 * note: it's not really needed because none of the other requested functions took item as an argument
 */
 
 
 /**
 * @name: Cart.create
 * @description Cart constructor , creates an empty array of items 
 * @returns instance of a Cart(an empty array): Array Object
 */
 
 /**
 * @name: getItems
 * @description returns all items in a cart
 * @returns [{Item}]
 */

/**
 * @name: hasProduct
 * @description checks if a product exists in a cart by comparing ids
 * @param product: object
 * @returns boolean
 */
 
 /**
 * @name: addItem
 * @description adds an item to the cart (if product already exists, increment count and adjust compound price of item, otherwise, add a new item w/ count 1)
 * @param product: object
 * @returns updated cart --> [{Item}]: Object
 */
 
/**
 * @name removeItem
 * @description decrement the item count in the cart or completely removes it
 * @param product: object
 * @returns updated Cart --> [{Item}]: Object or errorMessage: array of objects
 */
 
 /**
 * @name removeProduct
 * @description removes a product completely from a cart (if it exists)
 * @param product: Object
 * @returns updated Cart --> [{Item}]: array of objects
 */


/** 
 * @name: getItem
 * @description if a product exists in a cart, gets its item. otherwise, returns errorMessage
 * @param product: object 
 * @returns item: Object or {errorMessage: String}: Object
 */


/**
 * @name: getTotal
 * @description calculates total price of the cart
 * @returns total: number
 */
 
 /**
 * @name: clearCart
 * @description removes all items from cart
 * @returns void
 */

/**
* @name: indexOfProduct
* @description same as indexOf in js array prototypes but for Product Object; (returns -1 if element is not found)
* @param index: number 
*/
