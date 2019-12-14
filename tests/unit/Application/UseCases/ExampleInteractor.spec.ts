import "../../../../src/setup_container";
import {container} from "tsyringe";
import {ExampleInteractor} from "../../../../src/Application/UseCases/ExampleInteractor";

const assert = require('assert');

describe('ExampleInteractor#exec', () => {
    it('exec', async () => {
        /*
         * Prepare
         */

        /*
         * Run
         */
        const interactor = container.resolve<ExampleInteractor>('ExampleInteractor');
        const actual = interactor.exec();

        /*
         * Assert
         */
        assert.equal(true, actual);
    });
});