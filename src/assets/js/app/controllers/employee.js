import { AuthSystem } from "../models/AuthSystem.js";
import { Director } from "../models/Employees/Director.js";
import { Manager } from "../models/Employees/Manager.js";

const director = new Director("Jeferson", 20000, 12345678900);
const manager = new Manager("Nayara", 5000, 12345678901);

director.createPassword("123456");
manager.createPassword("123");

const loginDirector = AuthSystem.login(director, "123456");

// const loginManager = AuthSystem.login(manager, "123");

let user = "";
if(loginDirector) {

    user = "Diretor";
} else if(loginManager) {

    user = "Gerente";
}

console.log(`\nuser: ${user}\n`);