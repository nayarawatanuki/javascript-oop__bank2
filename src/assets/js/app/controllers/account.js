import { Client } from "../models/Client.js";
import { CurrentAccount } from "../models/Account/Current.js";
import { SalaryAccount } from "../models/Account/Salary.js";
import { SavingsAccount } from "../models/Account/Savings.js";
import { AuthSystem } from "../models/AuthSystem.js";

const client1 = new Client("Nayara", 11122233309, "9718");
const loginClient1 = AuthSystem.login(client1, "9718");

const currentAccountClient1 = new CurrentAccount(0, client1, 1001);
currentAccountClient1.deposit(500);
currentAccountClient1.withdraw(100);

const savingsAccountClient1 = new SavingsAccount(50, client1, 1001);
savingsAccountClient1.withdraw(10);

const salaryAccountClient1 = new SalaryAccount(client1);
salaryAccountClient1.deposit(100);
salaryAccountClient1.withdraw(10);

console.log(`\nCliente1 está logado? ${loginClient1}\n`);
console.log(currentAccountClient1);
console.log(savingsAccountClient1);
console.log(salaryAccountClient1);

console.log(`Contas cadastradas: ${CurrentAccount.countAccounts}\n`);