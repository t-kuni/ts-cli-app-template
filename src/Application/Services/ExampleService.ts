import {inject, injectable} from "tsyringe";

@injectable()
export class ExampleService {
    exec() {
        console.log('Hello from ExampleService.');
    }
}