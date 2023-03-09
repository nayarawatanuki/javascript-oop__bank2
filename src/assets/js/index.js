import { Client } from "./Client.js";
import { CurrentAccount } from "./CurrentAccount.js";

const client1 = new Client("Nayara", 11122233309);
const client2 = new Client("Alice", 88822233309);

const currentAccountClient1 = new CurrentAccount(1001, client1);
const currentAccountClient2 = new CurrentAccount(1002, client2);



currentAccountClient1.deposit(500);
console.log("\n", currentAccountClient1, "\n");

const amountWithdraw = currentAccountClient1.withdraw(50);
console.log("-----------------------------------");
console.log(`///Extrato de ${client1.name}:`);
console.log("Saque: ", amountWithdraw);
console.log("Saldo: ", currentAccountClient1._balance, "\n");

const transferClient1 = currentAccountClient1.transfer(200, currentAccountClient2);
console.log("Transferencia: ", transferClient1);
console.log("Saldo: ", currentAccountClient1._balance, "");
console.log("----------------------------------- \n");


console.log(currentAccountClient2, "\n");
console.log("-----------------------------------");
console.log(`///Extrato de ${client2.name}:`);
console.log("Saldo: ", currentAccountClient2._balance);
console.log("----------------------------------- \n");
console.log(`Contas cadastradas: ${CurrentAccount.countAccounts} \n`);