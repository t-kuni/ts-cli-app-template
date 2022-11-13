import {inject, injectable} from "tsyringe";
import {DI} from "../../diTokens";
import {IExampleService} from "../Services/IExampleService";
import {IConfigReadService} from "../Services/IConfigReadService";
import {IStdOut} from "../../Domain/Infrastructure/System/IStdOut";

@injectable()
export class MainInteractor {
    private service: IExampleService;
    private configReader: IConfigReadService;
    private stdOut: IStdOut;

    constructor(
        @inject(DI.Application.Services.IExampleService) service: IExampleService,
        @inject(DI.Domain.Infrastructure.System.IStdOut) stdOut: IStdOut,
        @inject(DI.Application.Services.IConfigReadService) configReader: IConfigReadService,
    ) {
        this.configReader = configReader;
        this.stdOut = stdOut;
        this.service = service;
    }

    exec(input: MainInteractorInput) {
        this.service.exec();

        const config = this.configReader.read(input.config)

        this.stdOut.println(`Hello! ${config.name}<${config.email}>`)

        const env: string = process.env.ENV;
        if (env != "") {
            this.stdOut.println(`ENV: ${env}`)
        } else {
            this.stdOut.println(`ENV: (undefined)`)
        }

        const msg = input.message
        if (msg.length > 0) {
            this.stdOut.println('message: ' + msg)
        } else {
            this.stdOut.println('message: (message option didn\'t specified)')
        }
    }
}

export interface MainInteractorInput {
    message: string;
    config: string;
}