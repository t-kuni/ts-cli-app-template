import {inject, injectable} from "tsyringe";
import {ExampleService} from "../Services/ExampleService";

@injectable()
export class ExampleInteractor {
    private service: ExampleService;

    constructor(@inject('ExampleService') service: ExampleService) {
        this.service = service;
    }

    exec() {
        this.service.exec();

        return true;
    }
}