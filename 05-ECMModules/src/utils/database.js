const databaseType = {
    userType: "admim",
    typeData: "datalocal"
}

async function conncetToDatabase(dataName) {
    //logica de conexão
    console.log("Conectado ao Banco de Dados: " + dataName);
}

async function disconncetDatabase() {
    //logica de conexão
    console.log("Desconectado do Banco de Dados");
}

export { 
    conncetToDatabase,
    disconncetDatabase, 
    databaseType 
};