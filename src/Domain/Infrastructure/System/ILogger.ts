export interface ILogger {
    error(msg: string, meta?: any): void;
    warn(msg: string, meta?: any): void;
    info(msg: string, meta?: any): void;
    http(msg: string, meta?: any): void;
    verbose(msg: string, meta?: any): void;
    debug(msg: string, meta?: any): void;
    silly(msg: string, meta?: any): void;
}