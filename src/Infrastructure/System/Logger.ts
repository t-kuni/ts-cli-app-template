import {ILogger} from "../../Domain/Infrastructure/System/ILogger";
import * as winston from "winston";

export class Logger implements ILogger {
    private logger: winston.Logger;

    constructor() {
        const level = process.env.LOG_LEVEL || 'info';

        this.logger = winston.createLogger({
            level,
            format: winston.format.combine(
                winston.format.timestamp({
                    format: "YYYY-MM-DD HH:mm:ss"
                }),
                winston.format.errors({stack: true}),
                winston.format.json()
            ),
            defaultMeta: {},
            transports: [
                new winston.transports.Console()
            ],
            exceptionHandlers: [
                new winston.transports.Console()
            ],
            exitOnError: false
        });
    }

    error(msg: string, meta?: any) {
        this.logger.error(msg, meta);
    }

    warn(msg: string, meta?: any) {
        this.logger.warn(msg, meta);
    }

    info(msg: string, meta?: any) {
        this.logger.info(msg, meta);
    }

    http(msg: string, meta?: any) {
        this.logger.http(msg, meta);
    }

    verbose(msg: string, meta?: any) {
        this.logger.verbose(msg, meta);
    }

    debug(msg: string, meta?: any) {
        this.logger.debug(msg, meta);
    }

    silly(msg: string, meta?: any) {
        this.logger.silly(msg, meta);
    }
}