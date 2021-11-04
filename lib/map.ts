import * as F from "./formatters";

type FormatPair = Readonly<[string, F.Formatter]>;
type FormatterKey = string;

export type FormatMap = Map<FormatterKey, FormatPair>;

export const FORMAT_MAP = new Map<FormatterKey, FormatPair>([
  ["0", ["Initial", F.initialValue]],
  ["1", ["Lowercase", F.lowerCase]],
  ["2", ["Uppercase", F.upperCase]],
  ["3", ["Title case", F.titleCase]],
  ["4", ["Trim Whitespace", F.trimWhiteSpace]],
  ["5", ["Clap back", F.clapBack]],
  ["6", ["Chicago Title Case", F.toChicagoTitleCase]],
  ["7", ["Kebab Case", F.toKebabCase]],
  ["8", ["Dot Case", F.toDotCase]],
  ["9", ["Snake Case", F.toSnakeCase]],
]);
