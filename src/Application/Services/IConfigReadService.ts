import Config from "../../Domain/Models/Config";

export interface IConfigReadService {
    read(path: string): Config | null;
}