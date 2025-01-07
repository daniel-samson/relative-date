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

Deno.test("RelativeDate: noon today", () => {
  const relativeDateString = "noon today";
  const actualDate = relativeDate(relativeDateString);

  const expectedDate = new Date();
  expectedDate.setHours(12, 0, 0, 0);
  assertEquals(actualDate.getTime(), expectedDate.getTime());
});

Deno.test("RelativeDate: tomorrow noon", () => {
  const relativeDateString = "tomorrow noon";
  const actualDate = relativeDate(relativeDateString);

  const expectedDate = new Date();
  expectedDate.setDate(expectedDate.getDate() + 1);
  expectedDate.setHours(12, 0, 0, 0);
  assertEquals(actualDate.getTime(), expectedDate.getTime());
});

Deno.test("RelativeDate: tomorrow midnight", () => {
  const relativeDateString = "tomorrow midnight";
  const actualDate = relativeDate(relativeDateString);

  const expectedDate = new Date();
  expectedDate.setDate(expectedDate.getDate() + 1);
  expectedDate.setHours(0, 0, 0, 0);
  assertEquals(actualDate.getTime(), expectedDate.getTime());
});

Deno.test("RelativeDate: yesterday midnight", () => {
  const relativeDateString = "yesterday midnight";
  const actualDate = relativeDate(relativeDateString);

  const expectedDate = new Date();
  expectedDate.setDate(expectedDate.getDate() - 1);
  expectedDate.setHours(0, 0, 0, 0);
  assertEquals(actualDate.getTime(), expectedDate.getTime());
});

Deno.test("RelativeDate: yesterday noon", () => {
  const relativeDateString = "yesterday noon";
  const actualDate = relativeDate(relativeDateString);

  const expectedDate = new Date();
  expectedDate.setDate(expectedDate.getDate() - 1);
  expectedDate.setHours(12, 0, 0, 0);
  assertEquals(actualDate.getTime(), expectedDate.getTime());
});

Deno.test("RelativeDate: 7am", () => {
  const relativeDateString = "7am";
  const actualDate = relativeDate(relativeDateString);

  const expectedDate = new Date();
  expectedDate.setHours(7, 0, 0, 0);
  assertEquals(actualDate.getTime(), expectedDate.getTime());
});

Deno.test("RelativeDate: 7pm", () => {
  const relativeDateString = "7pm";
  const actualDate = relativeDate(relativeDateString);

  const expectedDate = new Date();
  expectedDate.setHours(19, 0, 0, 0);
  assertEquals(actualDate.getTime(), expectedDate.getTime());
});


Deno.test("RelativeDate: tomorrow 7am", () => {
  const relativeDateString = "tomorrow 7am";
  const actualDate = relativeDate(relativeDateString);

  const expectedDate = new Date();
  expectedDate.setDate(expectedDate.getDate() + 1);
  expectedDate.setHours(7, 0, 0, 0);
  assertEquals(actualDate.getTime(), expectedDate.getTime());
});

Deno.test("RelativeDate: tomorrow 7pm", () => {
  const relativeDateString = "tomorrow 7pm";
  const actualDate = relativeDate(relativeDateString);

  const expectedDate = new Date();
  expectedDate.setDate(expectedDate.getDate() + 1);
  expectedDate.setHours(19, 0, 0, 0);
  assertEquals(actualDate.getTime(), expectedDate.getTime());
});

Deno.test("RelativeDate: yesterday 7am", () => {
  const relativeDateString = "yesterday 7am";
  const actualDate = relativeDate(relativeDateString);

  const expectedDate = new Date();
  expectedDate.setDate(expectedDate.getDate() - 1);
  expectedDate.setHours(7, 0, 0, 0);
  assertEquals(actualDate.getTime(), expectedDate.getTime());
});

Deno.test("RelativeDate: yesterday 7pm", () => {
  const relativeDateString = "yesterday 7pm";
  const actualDate = relativeDate(relativeDateString);

  const expectedDate = new Date();
  expectedDate.setDate(expectedDate.getDate() - 1);
  expectedDate.setHours(19, 0, 0, 0);
  assertEquals(actualDate.getTime(), expectedDate.getTime());
});

Deno.test("RelativeDate: 7am tomorrow", () => {
  const relativeDateString = "7am tomorrow";
  const actualDate = relativeDate(relativeDateString);

  const expectedDate = new Date();
  expectedDate.setDate(expectedDate.getDate() + 1);
  expectedDate.setHours(7, 0, 0, 0);
  assertEquals(actualDate.getTime(), expectedDate.getTime());
});

Deno.test("RelativeDate: 7pm tomorrow", () => {
  const relativeDateString = "7pm tomorrow";
  const actualDate = relativeDate(relativeDateString);

  const expectedDate = new Date();
  expectedDate.setDate(expectedDate.getDate() + 1);
  expectedDate.setHours(19, 0, 0, 0);
  assertEquals(actualDate.getTime(), expectedDate.getTime());
});

Deno.test("RelativeDate: 7am yesterday", () => {
  const relativeDateString = "7am yesterday";
  const actualDate = relativeDate(relativeDateString);

  const expectedDate = new Date();
  expectedDate.setDate(expectedDate.getDate() - 1);
  expectedDate.setHours(7, 0, 0, 0);
  assertEquals(actualDate.getTime(), expectedDate.getTime());
});

Deno.test("RelativeDate: 7pm yesterday", () => {
  const relativeDateString = "7pm yesterday";
  const actualDate = relativeDate(relativeDateString);

  const expectedDate = new Date();
  expectedDate.setDate(expectedDate.getDate() - 1);
  expectedDate.setHours(19, 0, 0, 0);
  assertEquals(actualDate.getTime(), expectedDate.getTime());
});

Deno.test("RelativeDate: today 7am", () => {
  const relativeDateString = "today 7am";
  const actualDate = relativeDate(relativeDateString);

  const expectedDate = new Date();
  expectedDate.setHours(7, 0, 0, 0);
  assertEquals(actualDate.getTime(), expectedDate.getTime());
});

Deno.test("RelativeDate: 7pm today", () => {
  const relativeDateString = "7pm today";
  const actualDate = relativeDate(relativeDateString);

  const expectedDate = new Date();
  expectedDate.setHours(19, 0, 0, 0);
  assertEquals(actualDate.getTime(), expectedDate.getTime());
});
