import './bootstrap';
import {container} from "tsyringe";
import {MainInteractor} from "./Application/UseCases/MainInteractor";
import {DI} from "./diTokens";

(async () => {
    try {
        const interactor = container.resolve<MainInteractor>(DI.Application.UseCases.MainInteractor);
        await interactor.exec();
    } catch (e) {
        //
        // Do any error handling.
        //
        console.error(e);
    }
})();