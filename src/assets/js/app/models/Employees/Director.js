import { Employee } from "./Employee.js";

export class Director extends Employee {

    constructor(name, salrary, cpf) {

        super(name, salrary, cpf);
        this._bonus = 2;
    }
}