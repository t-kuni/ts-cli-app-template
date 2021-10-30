import {inject, injectable} from "tsyringe";
import {ExampleService} from "../Services/ExampleService";
import {ArgumentProvider} from "../../Infrastructure/System/ArgumentProvider";
import {StdOut} from "../../Infrastructure/System/StdOut";

@injectable()
export class ExampleInteractor {
    private service: ExampleService;
    private stdOut: StdOut;
    private argumentProvider: ArgumentProvider;

    constructor(
        @inject('ExampleService') service: ExampleService,
        @inject('IStdOut') stdOut: StdOut,
        @inject('IArgumentProvider') argumentProvider: ArgumentProvider,
    ) {
        this.stdOut = stdOut;
        this.argumentProvider = argumentProvider;
        this.service = service;
    }

    exec() {
        this.service.exec();

        const msg = this.argumentProvider.getArgs().message
        if (msg.length > 0) {
            this.stdOut.println('message: ' + msg)
        } else {
            this.stdOut.println('message: (message option didn\'t specified)')
        }
    }
}