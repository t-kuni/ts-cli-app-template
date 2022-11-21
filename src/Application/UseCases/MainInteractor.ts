import {inject, injectable} from "tsyringe";
import {DI} from "../../diTokens";
import {IExampleService} from "../Services/IExampleService";
import {IConfigReadService} from "../Services/IConfigReadService";
import {IStdOut} from "../../Domain/Infrastructure/System/IStdOut";
import {ITimer} from "../../Domain/Infrastructure/System/ITimer";
import {ILogger} from "../../Domain/Infrastructure/System/ILogger";

@injectable()
export class MainInteractor {
    private service: IExampleService;
    private configReader: IConfigReadService;
    private stdOut: IStdOut;
    private timer: ITimer;
    private logger: ILogger;

    constructor(
        @inject(DI.Application.Services.IExampleService) service: IExampleService,
        @inject(DI.Domain.Infrastructure.System.IStdOut) stdOut: IStdOut,
        @inject(DI.Application.Services.IConfigReadService) configReader: IConfigReadService,
        @inject(DI.Domain.Infrastructure.System.ITimer) timer: ITimer,
        @inject(DI.Domain.Infrastructure.System.ILogger) logger: ILogger,
    ) {
        this.configReader = configReader;
        this.stdOut = stdOut;
        this.service = service;
        this.timer = timer;
        this.logger = logger;
    }

    exec(input: MainInteractorInput) {
        this.logger.info('Start MainInteractor', {input});

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

        const now = this.timer.now()
        this.stdOut.println(`Time: ` + now.setZone(process.env.TZ).toISO());

        this.logger.info('End MainInteractor');
    }
}

export interface MainInteractorInput {
    message: string;
    config: string;
}