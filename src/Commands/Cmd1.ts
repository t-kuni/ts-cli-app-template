import {command, option, string} from 'cmd-ts';
import {container} from "tsyringe";
import {MainInteractor, MainInteractorInput} from "../Application/UseCases/MainInteractor";
import {DI} from "../diTokens";

export default command({
    name: 'cmd1',
    args: {
        message: option({
            type: string,
            long: 'message',
            short: 'm',
            defaultValue(): string {
                return ""
            }
        }),
        config: option({
            type: string,
            long: 'config',
            short: 'c',
            defaultValue(): string {
                return "./config.yml"
            }
        }),
    },
    handler: async (args) => {
        const input: MainInteractorInput = {
            message: args.message,
            config: args.config,
        }

        const interactor = container.resolve<MainInteractor>(DI.Application.UseCases.MainInteractor);
        await interactor.exec(input);
    },
});