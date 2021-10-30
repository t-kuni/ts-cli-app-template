import {inject, injectable} from "tsyringe";
import {ExampleService} from "../Services/ExampleService";
import {ArgumentProvider} from "../../Infrastructure/System/ArgumentProvider";

@injectable()
export class ExampleInteractor {
    private service: ExampleService;
    private argumentProvider: ArgumentProvider;

    constructor(
        @inject('ExampleService') service: ExampleService,
        @inject('IArgumentProvider') argumentProvider: ArgumentProvider,
    ) {
        this.argumentProvider = argumentProvider;
        this.service = service;
    }

    exec() {
        this.service.exec();

        const msg = this.argumentProvider.getArgs().message
        if (msg.length > 0) {
            console.log('message: ' + msg);
        } else {
            console.log('message: (message option didn\'t specified)');
        }

        return true;
    }
}