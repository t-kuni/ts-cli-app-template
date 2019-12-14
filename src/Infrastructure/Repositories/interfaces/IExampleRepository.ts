import ExampleItem from "../../../Domain/ValueObjects/ExampleItem";

export interface IExampleRepository {
    save(item: ExampleItem): boolean;

    find(): ExampleItem;
}