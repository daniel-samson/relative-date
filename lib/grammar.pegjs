// Grammar for relativeDate parser

RelativeDate = Now / Day / DayTime

Now  = "now" { return { type: "Now", value: 0 }; }
Today = "today" { return { type: "WhichDay", value: 0 }; }
Tomorrow = "tomorrow" { return { type: "WhichDay", value: 1 }; }
Yesterday = "yesterday" { return { type: "WhichDay", value: -1 }; }
Day =  Today / Tomorrow / Yesterday
Midnight = "midnight" { return { type: "DayTime", value: 0 }; }
Noon = "noon" { return { type: "DayTime", value: 12 }; }
DayTime = Midnight / Noon


Integer = [0-9]+ { return parseInt(text(), 10); }
WS = [ \t]*