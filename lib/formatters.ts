import deburr from "lodash-es/deburr";
import isNumber from "lodash-es/isNumber";
import upperFirst from "lodash-es/upperFirst";

export type Formatter = (v: string) => string;

export const initialValue: Formatter = (value: string) => value;
export const lowerCase: Formatter = (value: string) => value.toLowerCase();
export const upperCase: Formatter = (value: string) => value.toUpperCase();

export const titleCase: Formatter = (str: string) => {
  const lowerCase = str.toLowerCase();

  return lowerCase.replace(
    /\w\S*/g,
    (x) => x.charAt(0).toUpperCase() + x.substr(1).toLowerCase()
  );
};

export const trimWhiteSpace: Formatter = (value: string) => value.trim();

export const clapBack: Formatter = (value: string) =>
  value.replace(/\s/g, " 👏 ").concat(" 👏");

/** Chicago Title Case */
const ONLY_WORDS_REGEX = /[^!@#\$%\^\&*\)\(+=.\-\s,\[\]\/\"\?]+/g;
const alwaysLowercaseWords = [
  "and",
  "or",
  "of",
  "but",
  "for",
  "or",
  "nor",
  "the",
  "a",
  "an",
  "as",
  "down",
  "under",
  "over",
  "to",
  "through",
  "during",
  "without",
  "on",
  "in",
  "by",
  "off",
];

const isAllCapitalized = (word: string) => {
  return word.toUpperCase() === word;
};

const isSpaceCharacter = (word: string) => {
  return /^\s$/.test(word);
};

/**
 * Checks for irregular capitalization
 *
 * Hello -> false
 * hello user -> false
 * HellO -> true
 * heLlo UsEr -> true
 */
const isIrregularCapitalized = (word: string) => {
  if (isAllCapitalized(word)) {
    return false;
  }

  const restOfWord = word.slice(1);
  const convertedWord = deburr(restOfWord);

  return /[A-Z]+/.test(convertedWord);
};

export const toChicagoTitleCase: Formatter = (text: string) => {
  const words = text.match(ONLY_WORDS_REGEX);
  let counter = 0;

  if (words === null) {
    return text;
  }

  return text.replace(ONLY_WORDS_REGEX, (word, index) => {
    const lowercaseWord = word.toLowerCase();
    counter += 1;

    // Lowercase "x" in "Artsy X Capsule auctions" case
    if (
      lowercaseWord === "x" &&
      isSpaceCharacter(text[index - 1]) &&
      isSpaceCharacter(text[index + word.length])
    ) {
      return lowercaseWord;
    }

    /**
     * We don't change:
     * - full capitalized words (maybe the brand name)
     * - irregular capitalization (heLlo UsEr)
     * - numbers
     */
    if (isNumber(word) || isAllCapitalized(word) || isIrregularCapitalized(word)) {
      return word;
    }

    // Capitalize the first and last words
    if (counter === 1 || counter === words.length) {
      return upperFirst(word);
    }

    if (alwaysLowercaseWords.includes(lowercaseWord)) {
      return lowercaseWord;
    }

    return upperFirst(word);
  });
};

/** kebab Case */
export const toKebabCase: Formatter = (value: string) =>
  value
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .toLowerCase();

/** Dot Case */
export const toDotCase: Formatter = (value: string) =>
  value.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[\s_]+/g, ".");

export const toSnakeCase: Formatter = (value: string) => {
  const matches = value.match(
    /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
  );

  if (matches === null) {
    return value;
  }

  return matches.map((s) => s.toLowerCase()).join("_");
};
