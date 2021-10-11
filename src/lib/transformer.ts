import html from "remark-html";
import { FORMAT_MAP } from "./map";

export const makeHTML = async (value: string) => {
  const { remark } = await import("remark");
  const parsed = remark().use(html).processSync(value);

  return parsed.toString("utf8");
};

type FormatterKey = number;

export type FormattedStates = [FormatterKey, string][];

export type FormattedOutput = {
  states: FormattedStates;
  formatted: string;
};

const reducer = (acc: FormattedOutput, currentValue: number): FormattedOutput => {
  const pair = FORMAT_MAP.get(currentValue);

  if (pair) {
    const [, formatter] = pair;
    const value = formatter(acc.formatted);

    acc.states.push([currentValue, value]);
    acc.formatted = value;
    return acc;
  }

  return acc;
};

export const tranformTextWithFormatters = (
  value: string,
  formatKeys: number[]
): FormattedOutput => {
  return formatKeys.reduce<FormattedOutput>(reducer, {
    states: [[0, value]],
    formatted: value,
  });
};
