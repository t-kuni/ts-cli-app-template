import "../../bootstrap";
import {container} from "tsyringe";
import {MainInteractor, MainInteractorInput} from "./MainInteractor";
import {IStdOut} from "../../Domain/Infrastructure/System/IStdOut";
import {createMock} from 'ts-auto-mock';
import {ITextReader} from "../../Domain/Infrastructure/System/ITextReader";
import {DI} from "../../diTokens";
import assert = require('assert');
import {ITimer} from "../../Domain/Infrastructure/System/ITimer";
import {DateTime} from "luxon";

describe('MainInteractor', () => {
    describe('exec', () => {
        it('Should return normal value', async () => {
            /*
             * Prepare
             */
            process.env.ENV = 'test';
            process.env.TZ = 'UTC';

            const mockAsserts = [];
            {
                const mock = createMock<ITimer>();
                {
                    const fn = mock.now = jest.fn()
                    fn.mockReturnValue(DateTime.fromISO('2020-01-01T09:00:00+09:00'));
                }
                container.register(DI.Domain.Infrastructure.System.ITimer, {useValue: mock});
            }
            {
                const mock = createMock<IStdOut>();
                {
                    const fn = mock.println = jest.fn()
                    mockAsserts.push(() => {
                        expect(fn.mock.calls.length).toBe(5);
                        expect(fn.mock.calls[0][0]).toBe("Hello from ExampleService.");
                        expect(fn.mock.calls[1][0]).toBe("Hello! test<test@test.test>");
                        expect(fn.mock.calls[2][0]).toBe("ENV: test");
                        expect(fn.mock.calls[3][0]).toBe("message: (message option didn't specified)");
                        expect(fn.mock.calls[4][0]).toBe("Time: 2020-01-01T00:00:00.000Z");
                    })
                }
                container.register(DI.Domain.Infrastructure.System.IStdOut, {useValue: mock});
            }
            {
                const mock = createMock<ITextReader>();
                {
                    const fn = mock.read = jest.fn()
                    const mockConfigYaml = "name: test\nemail: test@test.test"
                    fn.mockReturnValue(mockConfigYaml)
                    mockAsserts.push(() => {
                        expect(fn.mock.calls.length).toBe(1);
                    })
                }
                container.register(DI.Domain.Infrastructure.System.ITextReader, {useValue: mock});
            }

            /*
             * Run
             */
            const input: MainInteractorInput = {
                message: "",
                config: "",
            }
            const interactor = container.resolve<MainInteractor>(DI.Application.UseCases.MainInteractor);
            interactor.exec(input);

            /*
             * Assert
             */
            assert.equal(true, true);
            mockAsserts.forEach(asserts => asserts())
        });
    });
});