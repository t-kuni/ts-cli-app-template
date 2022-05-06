import {inject, injectable} from "tsyringe";
import {StdOut} from "../../Infrastructure/System/StdOut";
import {DI} from "../../diTokens";
import {IExampleService} from "./IExampleService";

@injectable()
export class ExampleService implements IExampleService {
    private stdOut: StdOut;

    constructor(
        @inject(DI.Domain.Infrastructure.System.IStdOut) stdOut: StdOut,
    ) {
        this.stdOut = stdOut;
    }

    exec() {
        this.stdOut.println('Hello from ExampleService.');
    }
}