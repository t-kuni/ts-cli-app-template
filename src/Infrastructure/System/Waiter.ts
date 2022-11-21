import {IWaiter} from "../../Domain/Infrastructure/System/IWaiter";

export class Waiter implements IWaiter {
    async wait(ms: number): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            setTimeout(() => resolve(), ms);
        });
    }
}