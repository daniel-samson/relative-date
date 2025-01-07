// Grammar for relativeDate parser

RelativeDate = Now / DayWithHourMeridiem / HourMeridiemWithDay / HourMeridiem / DayTimeWithToday / DayWithDayTime / Day / DayTime

Now  = "now" { return { type: "Now", value: 0 }; }
Today = "today" { return { type: "WhichDay", value: 0 }; }
Tomorrow = "tomorrow" { return { type: "WhichDay", value: 1 }; }
Yesterday = "yesterday" { return { type: "WhichDay", value: -1 }; }
Day =  Today / Tomorrow / Yesterday
Midnight = "midnight" { return { type: "DayTime", value: 0 }; }
Noon = "noon" { return { type: "DayTime", value: 12 }; }
DayTime = Midnight / Noon
DayWithDayTime = day:Day WS dayTime:DayTime { return { type: "DayWithDayTime", day, dayTime }; }
DayTimeWithToday = dayTime:DayTime WS day:Today { return { type: "DayWithDayTime", dayTime, day }; }
AM = "am" { return { type: "Meridiem", value: "am" }; }
PM = "pm" { return { type: "Meridiem", value: "pm" }; }
Meridiem = AM / PM
Hour = "1" / "2" / "3" / "4" / "5" / "6" / "7" / "8" / "9" / "10" / "11" / "12" { return parseInt(text(), 10); }
HourMeridiem = hour:Integer WS meridiem:Meridiem { return { type: "HourMeridiem", hour, meridiem }; }
DayWithHourMeridiem = day:Day WS hourMeridiem:HourMeridiem { return { type: "DayWithHourMeridiem", day, hourMeridiem }; }
HourMeridiemWithDay = hourMeridiem:HourMeridiem WS day:Day { return { type: "DayWithHourMeridiem", hourMeridiem, day }; }
Integer = [0-9]+ { return parseInt(text(), 10); }
WS = [ \t]*