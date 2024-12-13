import * as cartService from "./service/cart.js"
import createItem from "./service/item.js";


const myCart = [];
const myWhishList = [];

console.log("Welcome to the your Shopee Cart!");

const item1 = await createItem("HotWheels Ferrari", 20.99, 1);
const item2 = await createItem("HotWheels lamborghini", 39.99, 3);

await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

await cartService.removeItem(myCart, 1)

await cartService.displayCart(myCart);

// await cartService.deleteItem(myCart, item2.name);
// await cartService.deleteItem(myCart, item1.name);

console.log("Shopee Cart Total IS!");
await cartService.calculateTotal(myCart);