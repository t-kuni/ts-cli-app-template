import {ITimer} from "../../Domain/Infrastructure/System/ITimer";
import { DateTime } from "luxon";

export class Timer implements ITimer {
    now(): DateTime {
        const timeZone = process.env.TZ;
        return DateTime.now().setZone(timeZone);
    }
}