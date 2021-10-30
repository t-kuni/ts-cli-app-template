import {IStdOut} from "./interfaces/IStdOut";

export class StdOut implements IStdOut {
    println(msg: string) {
        console.log(msg);
    }
}