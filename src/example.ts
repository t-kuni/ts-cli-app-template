import './bootstrap';
import {container} from "tsyringe";
import {ExampleInteractor} from "./Application/UseCases/ExampleInteractor";

const interactor = container.resolve<ExampleInteractor>("ExampleInteractor");

(async () => {
    try {
        await interactor.exec();
    } catch (e) {
        //
        // Do any error handling.
        //
        throw e;
    }
})();