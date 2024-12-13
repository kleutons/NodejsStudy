//quais ações meu carrinho pode fazer?

// --- CASOS DE USO --- //
//-> Adcionar Item
//-> Mostrar item do carrinho
//-> Deletar Item
//-> Remover Quantidade Item
//-> Calcular Total

//-> Adcionar Item ✅
async function addItem(userCart, item) {
    userCart.push(item);
}

//-> Mostrar item do carrinho
async function displayCart(userCart) {
    console.log("\nShopee cart list:");
    userCart.forEach((item, index) => {
        console.log(`${index+1}. ${item.name} - ${item.price} | ${item.quantity}x | ${item.subtotal()}`);
    })    
}

//-> Deletar Item
async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name);

    if(index != -1){
        userCart.splice(index, 1)
    }
}

//-> Remover Quantidade Item
async function removeItem(userCart, index) {
    //transforma o indice visual
    const deleteIndex = index - 1;

    // é maior do que zero e se é menor do que o tamnho do carrinho 
    if(index >= 0 && index < userCart.length){
        userCart.splice(deleteIndex, 1);
    }
}



//-> Calcular Total
async function calculateTotal(userCart) {
    const result = userCart.reduce((total, item)=> total + item.subtotal(),0);

    console.log(`\n🛒Total: ${result}`);
}

export {
    addItem,
    displayCart,
    deleteItem,
    removeItem,
    calculateTotal
}