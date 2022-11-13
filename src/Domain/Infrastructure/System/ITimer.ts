import { DateTime } from "luxon";

export interface ITimer {
    now(): DateTime;
}