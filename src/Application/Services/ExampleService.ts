import {inject, injectable} from "tsyringe";
import {StdOut} from "../../Infrastructure/System/StdOut";

@injectable()
export class ExampleService {
    private stdOut: StdOut;

    constructor(
        @inject('IStdOut') stdOut: StdOut,
    ) {
        this.stdOut = stdOut;
    }

    exec() {
        this.stdOut.println('Hello from ExampleService.');
    }
}