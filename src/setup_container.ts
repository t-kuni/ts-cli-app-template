import "reflect-metadata";
import {container} from "tsyringe";
import {ExampleService} from "./Application/Services/ExampleService";
import {ExampleRepository} from "./Infrastructure/Repositories/ExampleRepository";
import {ExampleInteractor} from "./Application/UseCases/ExampleInteractor";
import {ArgumentProvider} from "./Infrastructure/System/ArgumentProvider";

const isInTest = typeof global.it === 'function';

// Application Layer
container.register("ExampleService", {useClass: ExampleService});
container.register("ExampleInteractor", {useClass: ExampleInteractor});

// Infrastructure Layer
container.register("IExampleRepository", {useClass: ExampleRepository});
container.register("IArgumentProvider", {useClass: ArgumentProvider});