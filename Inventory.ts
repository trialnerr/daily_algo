// Declare a function Inventory that, when invoked with the new keyword, returns objects that keep track of an inventory. Your Inventory function should accept two arguments: item, a string, and price, a number. The object returned should contain a property whose key matches the passed-in item argument, and is set to another object with two properties: price (which will be set to the price argument the method was called with) and quantity, which should be initially set to 1.

// Each object returned from this Inventory constructor should, via the prototype chain, have access to three methods:

// The method addItem will add additional items to the object returned from the constructor. It should also accept an item and price argument, and when invoked, should check to see if the Inventory object it is called upon has a property that matches the passed-in item name. If it does not, add one, and set it to another item object, following the same format as above. If the Inventory object does have a property with that name, increment that item's quantity property by one, and replace the price with whatever number was just passed in.

// The method deleteItem should accept a string as an argument. If a matching property exists on the Inventory object, decrement its quantity by 1 and return the string 'Deleted'. If the quantity is already 0, return the string 'Nothing to delete'.

// The method checkItem should take a string as an argument and check to see whether that string exists as a property on the Inventory object. If so, return the object for that item. If not, return the string 'Item is not in inventory'.

type Item = {
  price: number; 
  quantity: number; 
}

class Inventory {
  //this tell typescript that this inventory class 
  //contains methods or an object with string keys that return Items

  [key: string]: Item | Function;
  constructor(item: string, price: number) {
    this[item] = {
      price,
      quantity: 1,
    };
  }

  hasItem(item: string): boolean {
    return item in this; 
  }

  checkItem(item: string) {
    return this.hasItem(item) ? this[item] as Item : 'Item is not in inventory'
  }

  addItem(item: string, price: number) {
    if (this.hasItem(item)) {
      (this[item] as Item).quantity++;
      (this[item] as Item).price = price;
    } else {
      this[item] = {
        price,
        quantity: 1,
      };
    }
  }

  deleteItem(item: string) {
    if (this.hasItem(item)) {
      if ((this[item] as Item).quantity) {
        (this[item] as Item).quantity--;
        return 'Deleted';
      } else return 'Nothing to Delete';
    }
    return 'Item is not in inventory';
  }
}

const myInventory = new Inventory('rice', 2); 
console.log(myInventory); 