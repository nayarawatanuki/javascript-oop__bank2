import { Account } from "./Account.js";

export class CurrentAccount extends Account {
    

    constructor(openingBalance, client, agency) {

        super(openingBalance, client, agency);
    }

    // sobreescrevendo o comportamento de sacar
    withdraw(amount) {

        let tax = 1.1;
        return this._withdraw(amount, tax);
    }
}