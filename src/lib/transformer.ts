import { FORMAT_MAP } from "./map";

type FormatterKey = number;
type States = [FormatterKey, string][];

export type FormattedOutput = {
  states: States;
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
