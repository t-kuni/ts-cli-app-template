import "reflect-metadata";
import {container} from "tsyringe";
import {ExampleService} from "./Application/Services/ExampleService";
import {ExampleRepository} from "./Infrastructure/Repositories/ExampleRepository";
import {ExampleInteractor} from "./Application/UseCases/ExampleInteractor";
import {ArgumentProvider} from "./Infrastructure/System/ArgumentProvider";
import {StdOut} from "./Infrastructure/System/StdOut";
import {TextReader} from "./Infrastructure/System/TextReader";
import {ConfigReadService} from "./Application/Services/ConfigReadService";

// Application Layer
container.register("ExampleService", {useClass: ExampleService});
container.register("ConfigReadService", {useClass: ConfigReadService});
container.register("ExampleInteractor", {useClass: ExampleInteractor});

// Infrastructure Layer
container.register("IExampleRepository", {useClass: ExampleRepository});
container.register("IArgumentProvider", {useClass: ArgumentProvider});
container.register("IStdOut", {useClass: StdOut});
container.register("ITextReader", {useClass: TextReader});