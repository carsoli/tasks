# tasks
#documentation of the methods exported

/**
 * @name Product
 * @description product constructor
 * @param id : number
 * @param name : string
 * @param price : number
 * @returns void 
 */
 
 /**
 * @name Item
 * @description item constructor. when passed 1 arg creates an item w/ count 1 (default).
 * when passed 2 args, creates an item with the count and price specified
 * @param product: Product Object 
 * @param count(optional)
 * @returns void 
 */
 
 /**
 * @name: Cart
 * @description Cart constructor , creates an empty array of items 
 * @returns void 
 */
 
 /**
 * @name: getItems
 * @description returns all items in a cart
 * @returns array of Items
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
 * @returns void 
 */
 
/**
 * @name removeItem
 * @description decrement the item count in the cart or completely removes it
 * @param product: object
 * @returns void 
 */
 
 /**
 * @name removeProduct
 * @description removes a product completely from a cart (if it exists) & returns updated array
 * @param product: Object
 * @returns void
 */


/** 
 * @name: getItem
 * @description if a product exists in a cart, gets its item. otherwise, returns null
 * @param product: object 
 * @returns item: object or null
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
* @description same as indexOf in js array prototypes but for objects
* @param product: Object Product
*/
