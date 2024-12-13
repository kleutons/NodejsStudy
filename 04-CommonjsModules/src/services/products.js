//todas as funções que lidam com produtos
const productType = {
    version: "digital",
    tax: "x1"
}

async function getFullName(codeId, productName) {
    console.log("ProductID: " + codeId + " -- Name: " + productName);
}

async function getProductLabel(productName) {
    console.log("Product: " + productName );
}

module.exports = {
    getFullName, 
    getProductLabel,
    productType
}