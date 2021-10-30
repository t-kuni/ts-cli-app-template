import {parse} from 'ts-command-line-args';
import {IArgumentProvider} from "./interfaces/IArgumentProvider";
import {IArguments} from "./interfaces/IArguments";

export class ArgumentProvider implements IArgumentProvider {
    private args: IArguments;

    constructor() {
        this.args = parse<IArguments>({
            message: {type: String, alias: 'm', optional: true, defaultValue: ""},
        }, {
            stopAtFirstUnknown: true
        });
    }

    getArgs(): IArguments {
        return this.args;
    }
}