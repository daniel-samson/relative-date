enum TimeUnit {
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

type RelativeTimeUnit = {
  unit: TimeUnit;
  multiplier: number;
};

type LookupTable = {
  [key: string]: number;
};

type RelativeLookupTable = {
  [key: string]: RelativeTimeUnit;
};

const RelativeLookupTable: RelativeLookupTable = {
  null: { unit: TimeUnit.Null, multiplier: TimeUnit.Null },
  ms: { unit: TimeUnit.Microsecond, multiplier: 1000 },
  msec: { unit: TimeUnit.Microsecond, multiplier: 1000 },
  msecs: { unit: TimeUnit.Microsecond, multiplier: 1000 },
  millisecond: {
    unit: TimeUnit.Microsecond,
    multiplier: 1000,
  },
  milliseconds: {
    unit: TimeUnit.Microsecond,
    multiplier: 1000,
  },
  µs: { unit: TimeUnit.Microsecond, multiplier: 1 },
  usec: { unit: TimeUnit.Microsecond, multiplier: 1 },
  usecs: { unit: TimeUnit.Microsecond, multiplier: 1 },
  µsec: { unit: TimeUnit.Microsecond, multiplier: 1 },
  µsecs: { unit: TimeUnit.Microsecond, multiplier: 1 },
  microsecond: {
    unit: TimeUnit.Microsecond,
    multiplier: 1,
  },
  microseconds: {
    unit: TimeUnit.Microsecond,
    multiplier: 1,
  },
  sec: { unit: TimeUnit.Second, multiplier: 1 },
  secs: { unit: TimeUnit.Second, multiplier: 1 },
  second: { unit: TimeUnit.Second, multiplier: 1 },
  seconds: { unit: TimeUnit.Second, multiplier: 1 },
  min: { unit: TimeUnit.Minute, multiplier: 1 },
  mins: { unit: TimeUnit.Minute, multiplier: 1 },
  minute: { unit: TimeUnit.Minute, multiplier: 1 },
  minutes: { unit: TimeUnit.Minute, multiplier: 1 },
  hour: { unit: TimeUnit.Hour, multiplier: 1 },
  hours: { unit: TimeUnit.Hour, multiplier: 1 },
  day: { unit: TimeUnit.Day, multiplier: 1 },
  days: { unit: TimeUnit.Day, multiplier: 1 },
  week: { unit: TimeUnit.Day, multiplier: 7 },
  weeks: { unit: TimeUnit.Day, multiplier: 7 },
  fortnight: { unit: TimeUnit.Day, multiplier: 14 },
  fortnights: { unit: TimeUnit.Day, multiplier: 14 },
  forthnight: { unit: TimeUnit.Day, multiplier: 14 },
  forthnights: { unit: TimeUnit.Day, multiplier: 14 },
  month: { unit: TimeUnit.Month, multiplier: 1 },
  months: { unit: TimeUnit.Month, multiplier: 1 },
  year: { unit: TimeUnit.Year, multiplier: 1 },
  years: { unit: TimeUnit.Year, multiplier: 1 },

  mondays: { unit: TimeUnit.Weekday, multiplier: 1 },
  monday: { unit: TimeUnit.Weekday, multiplier: 1 },
  mon: { unit: TimeUnit.Weekday, multiplier: 1 },
  tuesdays: { unit: TimeUnit.Weekday, multiplier: 2 },
  tuesday: { unit: TimeUnit.Weekday, multiplier: 2 },
  tue: { unit: TimeUnit.Weekday, multiplier: 2 },
  wednesdays: { unit: TimeUnit.Weekday, multiplier: 3 },
  wednesday: { unit: TimeUnit.Weekday, multiplier: 3 },
  wed: { unit: TimeUnit.Weekday, multiplier: 3 },
  thursdays: { unit: TimeUnit.Weekday, multiplier: 4 },
  thursday: { unit: TimeUnit.Weekday, multiplier: 4 },
  thu: { unit: TimeUnit.Weekday, multiplier: 4 },
  fridays: { unit: TimeUnit.Weekday, multiplier: 5 },
  friday: { unit: TimeUnit.Weekday, multiplier: 5 },
  fri: { unit: TimeUnit.Weekday, multiplier: 5 },
  saturdays: { unit: TimeUnit.Weekday, multiplier: 6 },
  saturday: { unit: TimeUnit.Weekday, multiplier: 6 },
  sat: { unit: TimeUnit.Weekday, multiplier: 6 },
  sundays: { unit: TimeUnit.Weekday, multiplier: 0 },
  sunday: { unit: TimeUnit.Weekday, multiplier: 0 },
  sun: { unit: TimeUnit.Weekday, multiplier: 0 },
  weekday: {
    unit: TimeUnit.Special,
    multiplier: TimeUnit.Weekday,
  },
  weekdays: {
    unit: TimeUnit.Special,
    multiplier: TimeUnit.Weekday,
  },
};

const RelativeTextLookupTable: LookupTable = {
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

const RelativeMonthLookupTable: LookupTable = {
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

/**
 * Converts a relative date into a date
 * @param relativeDateString A relative date string that is uses relative date format
 * @param baseDate The date which is used as a base for the calculation of relative dates
 * @returns The date
 */
export function relativeDate(relativeDateString: string, baseDate?: Date): Date {
  const relativeDateParts = relativeDateString.split(" ");
  // TODO: implement
  throw new Error("Not implemented");
  return new Date();
}
