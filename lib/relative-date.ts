import type {Day, Now, DayTime, DayWithDayTime} from "./grammar-parser.ts";
import {parse} from "./grammar-parser.ts";

/**
 * Returns the date for the given day
 * @param day The day to return the date for
 * @param baseDate
 * @returns The date
 */
function whichDay(day: Day, baseDate: Date): Date {
    baseDate.setHours(0, 0, 0, 0);
    baseDate.setDate(baseDate.getDate() + day.value);
    return baseDate;
}

/**
 * Returns the date for the given day time
 * @param day The day time to return the date for
 * @param baseDate
 * @returns The date
 */
function dayTime(day: DayTime, baseDate: Date): Date {
    baseDate.setHours(day.value, 0, 0, 0);
    return baseDate;
}

/**
 * Returns the date for the given day with day time
 * @param day The day to return the date for
 * @param baseDate
 * @returns The date
 */
function dayWithDayTime(day: DayWithDayTime, baseDate: Date): Date {
    baseDate.setHours(day.dayTime.value, 0, 0, 0);
    baseDate.setDate(baseDate.getDate() + day.day.value);
    return baseDate;
}


/**
 * Converts a relative date into a date
 * @param relativeDateString A relative date string that is uses relative date format
 * @param baseDate The date which is used as a base for the calculation of relative dates
 * @returns The date
 */
export function relativeDate(relativeDateString: string, baseDate: Date|null = null): Date {
    try {
        const parsed = parse(relativeDateString);
        const now = baseDate ? baseDate : new Date()

        if ((parsed as Now).type === "Now") {
            return now;
        } else if ((parsed as Day).type === "WhichDay") {
            return whichDay(parsed as Day, now);
        } else if ((parsed as DayTime).type === "DayTime") {
            return dayTime(parsed as DayTime, now);
        } else if ((parsed as DayWithDayTime).type === "DayWithDayTime") {
            return dayWithDayTime(parsed as DayWithDayTime, now);
        } else {
            throw new Error("Not supported");
        }

    } catch (e) {
        throw new Error(`Failed to parse relative date: ${(e as Error).message}`);
    }
}