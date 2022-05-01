import {inject, injectable} from "tsyringe";
import {StdOut} from "../../Infrastructure/System/StdOut";
import {ITextReader} from "../../Infrastructure/System/interfaces/ITextReader";
import Config from "../../Domain/Models/Config";
import {parse} from "yaml";

@injectable()
export class ConfigReadService {
    private textReader: ITextReader;

    constructor(
        @inject('ITextReader') textReader: ITextReader,
    ) {
        this.textReader = textReader;
    }

    read(path: string): Config|null {
        let configYaml;
        try {
            configYaml = this.textReader.read(path)
        } catch (err) {
            if (typeof err.code === "string" && err.code === 'ENOENT') {
                return new Config();
            } else {
                throw err;
            }
        }
        return parse(configYaml) as Config
    }
}