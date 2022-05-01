import "../../bootstrap";
import {container} from "tsyringe";
import {TextReader} from "./TextReader";


describe('TextReader#read', () => {
    it.skip('read', async () => {
        /*
         * Prepare
         */

        /*
         * Run
         */
        const testee = container.resolve<TextReader>('ITextReader');
        const config = testee.read('./config.yml');

        /*
         * Assert
         */
        expect(config).not.toBeNull()
    });
});