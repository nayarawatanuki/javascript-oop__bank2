export class Client {
    name;
    #cpf;

    get cpf() {
        return this._cpf;
    }

    constructor(name, cpf) {
        this.name = name;
        this._cpf = cpf;
    }
}