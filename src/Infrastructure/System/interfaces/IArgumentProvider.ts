import {IArguments} from "./IArguments";

export interface IArgumentProvider {
    getArgs(): IArguments;
}