import { Account } from "./Account.js";

export class SavingsAccount extends Account {

    constructor(openingBalance, client, agency) {

        super(openingBalance, client, agency);
    }

    withdraw(amount) {

        const tax = 1.02;
        return this._withdraw(amount, tax);
    }
}