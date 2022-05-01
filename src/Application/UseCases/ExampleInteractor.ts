import {inject, injectable} from "tsyringe";
import {ExampleService} from "../Services/ExampleService";
import {ArgumentProvider} from "../../Infrastructure/System/ArgumentProvider";
import {StdOut} from "../../Infrastructure/System/StdOut";
import {ConfigReadService} from "../Services/ConfigReadService";

@injectable()
export class ExampleInteractor {
    private service: ExampleService;
    private configReader: ConfigReadService;
    private stdOut: StdOut;
    private argumentProvider: ArgumentProvider;

    constructor(
        @inject('ExampleService') service: ExampleService,
        @inject('IStdOut') stdOut: StdOut,
        @inject('IArgumentProvider') argumentProvider: ArgumentProvider,
        @inject('ConfigReadService') configReader: ConfigReadService,
    ) {
        this.configReader = configReader;
        this.stdOut = stdOut;
        this.argumentProvider = argumentProvider;
        this.service = service;
    }

    exec() {
        this.service.exec();

        const args = this.argumentProvider.getArgs();
        const config = this.configReader.read(args.config)

        this.stdOut.println(`Hello! ${config.name}<${config.email}>`)

        const msg = args.message
        if (msg.length > 0) {
            this.stdOut.println('message: ' + msg)
        } else {
            this.stdOut.println('message: (message option didn\'t specified)')
        }
    }
}