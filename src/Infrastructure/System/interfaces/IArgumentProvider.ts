import {Arguments} from "../../../Domain/Models/Arguments";

export interface IArgumentProvider {
    getArgs(): Arguments;
}