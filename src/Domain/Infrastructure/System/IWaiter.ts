export interface IWaiter {
    wait(ms: number): Promise<void>;
}