const {getFullName, productType} = require("./services/products");
const config = require("./services/config");
const database = require("./services/database")


async function main(params) {
    console.log("Carrinho Compras");   
    getFullName(408, "mousePad");
    // p.getProductLabel("Teclado");
    console.log(config.client.device);
    console.log(productType.version);

    console.log(database.connectToDataBase("Meu Banco"));
    console.log(database.disconnectDataBase());
}
main();