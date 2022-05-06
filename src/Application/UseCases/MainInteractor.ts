import {inject, injectable} from "tsyringe";
import {DI} from "../../diTokens";
import {IExampleService} from "../Services/IExampleService";
import {IConfigReadService} from "../Services/IConfigReadService";
import {IStdOut} from "../../Domain/Infrastructure/System/IStdOut";
import {IArgumentProvider} from "../../Domain/Infrastructure/System/IArgumentProvider";

@injectable()
export class MainInteractor {
    private service: IExampleService;
    private configReader: IConfigReadService;
    private stdOut: IStdOut;
    private argumentProvider: IArgumentProvider;

    constructor(
        @inject(DI.Application.Services.IExampleService) service: IExampleService,
        @inject(DI.Domain.Infrastructure.System.IStdOut) stdOut: IStdOut,
        @inject(DI.Domain.Infrastructure.System.IArgumentProvider) argumentProvider: IArgumentProvider,
        @inject(DI.Application.Services.IConfigReadService) configReader: IConfigReadService,
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