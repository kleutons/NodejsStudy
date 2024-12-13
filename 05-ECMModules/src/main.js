import * as database from "./utils/database.js";
import {key} from "./utils/api.js"


console.log("Hello ECMa");
database.conncetToDatabase("my-database");
console.log(database.databaseType.typeData);
console.log(key.permission);