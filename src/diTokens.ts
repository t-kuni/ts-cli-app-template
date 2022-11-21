import {v4 as uuidv4} from 'uuid';

export const DI = {
    Application: {
        Services: {
            IExampleService: uuidv4(),
            IConfigReadService: uuidv4(),
        },
        UseCases: {
            MainInteractor: uuidv4(),
        }
    },
    Domain: {
        Infrastructure: {
            Repositories: {
                IExampleRepository: uuidv4(),
            },
            System: {
                IStdOut: uuidv4(),
                ITextReader: uuidv4(),
                ITimer: uuidv4(),
                ILogger: uuidv4(),
            }
        }
    },
}
