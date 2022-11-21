import "reflect-metadata";
import {container} from "tsyringe";
import {ExampleService} from "./Application/Services/ExampleService";
import {ExampleRepository} from "./Infrastructure/Repositories/ExampleRepository";
import {MainInteractor} from "./Application/UseCases/MainInteractor";
import {StdOut} from "./Infrastructure/System/StdOut";
import {TextReader} from "./Infrastructure/System/TextReader";
import {ConfigReadService} from "./Application/Services/ConfigReadService";
import {DI} from "./diTokens";
import {Timer} from "./Infrastructure/System/Timer";
import {Logger} from "./Infrastructure/System/Logger";
import {Waiter} from "./Infrastructure/System/Waiter";

// Application / UseCases
container.register(DI.Application.UseCases.MainInteractor, {useClass: MainInteractor});

// Application / Services
container.register(DI.Application.Services.IExampleService, {useClass: ExampleService});
container.register(DI.Application.Services.IConfigReadService, {useClass: ConfigReadService});

// Domain / Infrastructure / Repository
container.register(DI.Domain.Infrastructure.Repositories.IExampleRepository, {useClass: ExampleRepository});

// Domain / Infrastructure / System
container.register(DI.Domain.Infrastructure.System.IStdOut, {useClass: StdOut});
container.register(DI.Domain.Infrastructure.System.ITextReader, {useClass: TextReader});
container.register(DI.Domain.Infrastructure.System.ITimer, {useClass: Timer});
container.register(DI.Domain.Infrastructure.System.ILogger, {useClass: Logger});
container.register(DI.Domain.Infrastructure.System.IWaiter, {useClass: Waiter});