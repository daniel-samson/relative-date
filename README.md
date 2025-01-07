# relative-date
Converts relative date strings into dates. It ports the relative time format from PHP's `strtotime` [relative formats](https://www.php.net/manual/en/datetime.formats.php#datetime.formats.relative).

## Usage

```ts
function relativeDate(relativeDateString: string, baseDate?: Date): Date
```

### relativeDateString

The timestamp which is used as a base for the calculation of relative dates.

### baseDate (optional)

The date which is used as a base for the calculation of relative dates. when not provided, the current date is used.

### Examples

```ts
import { relativeDate } from "@danielsamson/relative-date";

console.log(relativeDate("now"));
console.log(relativeDate("1 day ago"));
console.log(relativeDate("+1 week"));
console.log(relativeDate("+1 week 2 days 4 hours 2 seconds"));
console.log(relativeDate("next Thursday"));
console.log(relativeDate("last Monday"));
```

## License

MIT

## Generate Parser

```sh
npm install
npm start
```
