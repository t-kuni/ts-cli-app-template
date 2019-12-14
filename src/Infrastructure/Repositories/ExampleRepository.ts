import ExampleItem from "../../Domain/ValueObjects/ExampleItem";
import {IExampleRepository} from "./interfaces/IExampleRepository";

export class ExampleRepository implements IExampleRepository {

    save(item: ExampleItem): boolean {
        return true;
    }

    find(): ExampleItem {
        return new ExampleItem('aaa');
    }
}