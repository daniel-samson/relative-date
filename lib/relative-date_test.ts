import { relativeDate } from "./relative-date.ts";
import { assertEquals } from "@std/assert/equals";

Deno.test("RelativeDate: now", () => {
  // note: parsing takes time so we need to parse the string first
  // and then compare the dates
  const relativeDateString = "now";
  const actualDate = relativeDate(relativeDateString);

  const expectedDate = new Date();
  assertEquals(actualDate, expectedDate);
});

Deno.test("RelativeDate: today", () => {
  const relativeDateString = "today";
  const actualDate = relativeDate(relativeDateString);

  const expectedDate = new Date();
  expectedDate.setHours(0, 0, 0, 0);
  assertEquals(actualDate.getTime(), expectedDate.getTime());
});

Deno.test("RelativeDate: tomorrow", () => {
  const now = new Date();
  const relativeDateString = "tomorrow";
  const actualDate = relativeDate(relativeDateString);

  const expectedDate = new Date();
  expectedDate.setDate(now.getDate() + 1);
  expectedDate.setHours(0, 0, 0, 0);
  assertEquals(actualDate.getTime(), expectedDate.getTime());
});

Deno.test("RelativeDate: yesterday", () => {
    const now = new Date();
    const relativeDateString = "yesterday";
    const actualDate = relativeDate(relativeDateString);

    const expectedDate = new Date();
    expectedDate.setDate(now.getDate() - 1);
    expectedDate.setHours(0, 0, 0, 0);
   assertEquals(actualDate.getTime(), expectedDate.getTime());
});

Deno.test("RelativeDate: midnight", () => {
  const relativeDateString = "midnight";
  const actualDate = relativeDate(relativeDateString);

  const expectedDate = new Date();
  expectedDate.setHours(0, 0, 0, 0);
  assertEquals(actualDate.getTime(), expectedDate.getTime());
});

Deno.test("RelativeDate: noon", () => {
  const relativeDateString = "noon";
  const actualDate = relativeDate(relativeDateString);

  const expectedDate = new Date();
  expectedDate.setHours(12, 0, 0, 0);
  assertEquals(actualDate.getTime(), expectedDate.getTime());
});