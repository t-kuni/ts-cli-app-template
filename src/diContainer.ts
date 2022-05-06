import "reflect-metadata";
import {container} from "tsyringe";
import {ExampleService} from "./Application/Services/ExampleService";
import {ExampleRepository} from "./Infrastructure/Repositories/ExampleRepository";
import {MainInteractor} from "./Application/UseCases/MainInteractor";
import {ArgumentProvider} from "./Infrastructure/System/ArgumentProvider";
import {StdOut} from "./Infrastructure/System/StdOut";
import {TextReader} from "./Infrastructure/System/TextReader";
import {ConfigReadService} from "./Application/Services/ConfigReadService";
import {DI} from "./diTokens";

// Application / UseCases
container.register(DI.Application.UseCases.MainInteractor, {useClass: MainInteractor});

// Application / Services
container.register(DI.Application.Services.IExampleService, {useClass: ExampleService});
container.register(DI.Application.Services.IConfigReadService, {useClass: ConfigReadService});

// Domain / Infrastructure / Repository
container.register(DI.Domain.Infrastructure.Repositories.IExampleRepository, {useClass: ExampleRepository});

// Domain / Infrastructure / System
container.register(DI.Domain.Infrastructure.System.IArgumentProvider, {useClass: ArgumentProvider});
container.register(DI.Domain.Infrastructure.System.IStdOut, {useClass: StdOut});
container.register(DI.Domain.Infrastructure.System.ITextReader, {useClass: TextReader});