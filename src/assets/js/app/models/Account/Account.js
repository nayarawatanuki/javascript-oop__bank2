// Classe abstrata
export class Account {

    static countAccounts = 0;

    constructor(openingBalance, client, agency) {
        
        if(this.constructor == Account) {
            throw new Error("Não é possível instanciar um objeto do tipo Conta(Account) diretamente, pois esta é uma classe abstrata.");
        }

        this._balance = openingBalance;
        this._client = client;
        this._agency = agency;

        Account.countAccounts++;
    }

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


    deposit(amount) {
        if(amount <= 0) {
            return;
        }
        this._balance += amount;
    }

    _withdraw(amount, tax) {
        const amountWithdraw = tax * amount;

        if(this._balance >= amountWithdraw) {
            
            this._balance -= amountWithdraw;
            return amountWithdraw;
        }

        return 0;
    }

    // Método abstrato
    withdraw(amount) {
        throw new Error("O método sacar da conta é abstrato.");
    }

    transfer(amount, account) {
        const amountWithdraw = this.withdraw(amount);
        account.deposit(amountWithdraw);
        return amountWithdraw;
    }
}