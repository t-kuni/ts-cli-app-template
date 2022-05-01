import "../../bootstrap";
import {container} from "tsyringe";
import {ExampleInteractor} from "./ExampleInteractor";
import {IStdOut} from "../../Infrastructure/System/interfaces/IStdOut";
import {createMock} from 'ts-auto-mock';

const assert = require('assert');

describe('ExampleInteractor#exec', () => {
    it('exec', async () => {
        /*
         * Prepare
         */
        const mockAsserts = [];
        {
            const mock = createMock<IStdOut>();
            {
                const fn = mock.println = jest.fn((msg: string) => null)
                mockAsserts.push(() => {
                    expect(fn.mock.calls.length).toBe(2);
                    expect(fn.mock.calls[0][0]).toBe("Hello from ExampleService.");
                    expect(fn.mock.calls[1][0]).toBe("message: (message option didn't specified)");
                })
            }
            container.register("IStdOut", {useValue: mock});
        }

        /*
         * Run
         */
        const interactor = container.resolve<ExampleInteractor>('ExampleInteractor');
        interactor.exec();

        /*
         * Assert
         */
        assert.equal(true, true);
        mockAsserts.forEach(asserts => asserts())
    });
});