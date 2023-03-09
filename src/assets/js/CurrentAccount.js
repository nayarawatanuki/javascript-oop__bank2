import { Client } from "./Client.js";

export class CurrentAccount {
    static countAccounts = 0;
    agency;
    _client;
    _balance = 0;

    set client(client) {
        if(client instanceof Client) {
            this._client = client;
        }
    }

    get client() {
        return this._client;
    }

    get balance() {
        return this._balance;
    }

    constructor(agency, client) {
        this.agency = agency;
        this.client = client;
        CurrentAccount.countAccounts++;
    }


    deposit(amount) {
        if(amount <= 0) {
            return;
        }
        this._balance += amount;
    }

    withdraw(amount) {
        if(this._balance >= amount) {
            
            this._balance -= amount;
            return amount;
        }
    }

    transfer(amount, account) {
        const amountWithdraw = this.withdraw(amount);
        account.deposit(amountWithdraw);
        return amountWithdraw;
    }
}