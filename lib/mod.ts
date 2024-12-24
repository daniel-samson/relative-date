export enum TimeUnit {
  Null = 0,
  Second = 1,
  Minute,
  Hour,
  Day,
  Month,
  Year,
  Weekday,
  Special,
  Microsecond,
}

export type RelativeTimeUnit = {
  name: string;
  unit: TimeUnit;
  multiplier: number;
};

export type LookupTable = {
  [key: string]: number;
};

export type RelativeLookupTable = {
  [key: string]: RelativeTimeUnit;
};

export const relativeLookupTable: RelativeLookupTable = {
  null: { name: "NULL", unit: TimeUnit.Null, multiplier: TimeUnit.Null },
  ms: { name: "ms", unit: TimeUnit.Microsecond, multiplier: 1000 },
  msec: { name: "msec", unit: TimeUnit.Microsecond, multiplier: 1000 },
  msecs: { name: "msecs", unit: TimeUnit.Microsecond, multiplier: 1000 },
  millisecond: {
    name: "millisecond",
    unit: TimeUnit.Microsecond,
    multiplier: 1000,
  },
  milliseconds: {
    name: "milliseconds",
    unit: TimeUnit.Microsecond,
    multiplier: 1000,
  },
  µs: { name: "µs", unit: TimeUnit.Microsecond, multiplier: 1 },
  usec: { name: "usec", unit: TimeUnit.Microsecond, multiplier: 1 },
  usecs: { name: "usecs", unit: TimeUnit.Microsecond, multiplier: 1 },
  µsec: { name: "µsec", unit: TimeUnit.Microsecond, multiplier: 1 },
  µsecs: { name: "µsecs", unit: TimeUnit.Microsecond, multiplier: 1 },
  microsecond: {
    name: "microsecond",
    unit: TimeUnit.Microsecond,
    multiplier: 1,
  },
  microseconds: {
    name: "microseconds",
    unit: TimeUnit.Microsecond,
    multiplier: 1,
  },
  sec: { name: "sec", unit: TimeUnit.Second, multiplier: 1 },
  secs: { name: "secs", unit: TimeUnit.Second, multiplier: 1 },
  second: { name: "second", unit: TimeUnit.Second, multiplier: 1 },
  seconds: { name: "seconds", unit: TimeUnit.Second, multiplier: 1 },
  min: { name: "min", unit: TimeUnit.Minute, multiplier: 1 },
  mins: { name: "mins", unit: TimeUnit.Minute, multiplier: 1 },
  minute: { name: "minute", unit: TimeUnit.Minute, multiplier: 1 },
  minutes: { name: "minutes", unit: TimeUnit.Minute, multiplier: 1 },
  hour: { name: "hour", unit: TimeUnit.Hour, multiplier: 1 },
  hours: { name: "hours", unit: TimeUnit.Hour, multiplier: 1 },
  day: { name: "day", unit: TimeUnit.Day, multiplier: 1 },
  days: { name: "days", unit: TimeUnit.Day, multiplier: 1 },
  week: { name: "week", unit: TimeUnit.Day, multiplier: 7 },
  weeks: { name: "weeks", unit: TimeUnit.Day, multiplier: 7 },
  fortnight: { name: "fortnight", unit: TimeUnit.Day, multiplier: 14 },
  fortnights: { name: "fortnights", unit: TimeUnit.Day, multiplier: 14 },
  forthnight: { name: "forthnight", unit: TimeUnit.Day, multiplier: 14 },
  forthnights: { name: "forthnights", unit: TimeUnit.Day, multiplier: 14 },
  month: { name: "month", unit: TimeUnit.Month, multiplier: 1 },
  months: { name: "months", unit: TimeUnit.Month, multiplier: 1 },
  year: { name: "year", unit: TimeUnit.Year, multiplier: 1 },
  years: { name: "years", unit: TimeUnit.Year, multiplier: 1 },

  mondays: { name: "mondays", unit: TimeUnit.Weekday, multiplier: 1 },
  monday: { name: "monday", unit: TimeUnit.Weekday, multiplier: 1 },
  mon: { name: "mon", unit: TimeUnit.Weekday, multiplier: 1 },
  tuesdays: { name: "tuesdays", unit: TimeUnit.Weekday, multiplier: 2 },
  tuesday: { name: "tuesday", unit: TimeUnit.Weekday, multiplier: 2 },
  tue: { name: "tue", unit: TimeUnit.Weekday, multiplier: 2 },
  wednesdays: { name: "wednesdays", unit: TimeUnit.Weekday, multiplier: 3 },
  wednesday: { name: "wednesday", unit: TimeUnit.Weekday, multiplier: 3 },
  wed: { name: "wed", unit: TimeUnit.Weekday, multiplier: 3 },
  thursdays: { name: "thursdays", unit: TimeUnit.Weekday, multiplier: 4 },
  thursday: { name: "thursday", unit: TimeUnit.Weekday, multiplier: 4 },
  thu: { name: "thu", unit: TimeUnit.Weekday, multiplier: 4 },
  fridays: { name: "fridays", unit: TimeUnit.Weekday, multiplier: 5 },
  friday: { name: "friday", unit: TimeUnit.Weekday, multiplier: 5 },
  fri: { name: "fri", unit: TimeUnit.Weekday, multiplier: 5 },
  saturdays: { name: "saturdays", unit: TimeUnit.Weekday, multiplier: 6 },
  saturday: { name: "saturday", unit: TimeUnit.Weekday, multiplier: 6 },
  sat: { name: "sat", unit: TimeUnit.Weekday, multiplier: 6 },
  sundays: { name: "sundays", unit: TimeUnit.Weekday, multiplier: 0 },
  sunday: { name: "sunday", unit: TimeUnit.Weekday, multiplier: 0 },
  sun: { name: "sun", unit: TimeUnit.Weekday, multiplier: 0 },
  weekday: {
    name: "weekday",
    unit: TimeUnit.Special,
    multiplier: TimeUnit.Weekday,
  },
  weekdays: {
    name: "weekdays",
    unit: TimeUnit.Special,
    multiplier: TimeUnit.Weekday,
  },
};

export const RelativeTextLookupTable: LookupTable = {
  first: 1,
  next: 1,
  second: 2,
  third: 3,
  fourth: 4,
  fifth: 5,
  sixth: 6,
  seventh: 7,
  eight: 8,
  eighth: 8,
  ninth: 9,
  tenth: 0,
  eleventh: 1,
  twelfth: 2,
  last: 1,
  previous: 1,
};

export const RelativeMonthLookupTable: LookupTable = {
  null: 0,
  jan: 1,
  feb: 2,
  mar: 3,
  apr: 4,
  jun: 6,
  jul: 7,
  aug: 8,
  sep: 9,
  sept: 9,
  oct: 10,
  nov: 11,
  dec: 12,
  i: 1,
  ii: 2,
  iii: 3,
  iv: 4,
  v: 5,
  vi: 6,
  vii: 7,
  viii: 8,
  ix: 9,
  x: 10,
  xi: 11,
  xii: 12,

  january: 1,
  february: 2,
  march: 3,
  april: 4,
  may: 5,
  june: 6,
  july: 7,
  august: 8,
  september: 9,
  october: 10,
  november: 11,
  december: 12,
};
