import { useEffect, useCallback, useReducer, Reducer } from "react";
import { reducer, ILowLowState, Action, LowLowActions } from "./reducer";

const copyContent = async (value: string) => {
  try {
    await navigator.clipboard.writeText(value);
    console.log("Copied to clipboard");
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
};
const LOCAL_STORAGE_KEY = "lowerCaseValue";

type HTMLParser = (value: string) => Promise<string>;

export const useLowLow = (parser: HTMLParser) => {
  const [{ isUpper, value, converted }, dispatch] = useReducer<
    Reducer<ILowLowState, Action>
  >(reducer, {
    isUpper: false,
    converted: "",
    value: "",
  });

  const setHTML = useCallback(
    async (value: string) => {
      const html = await parser(value);
      dispatch({ type: LowLowActions.SET_CONVERTED, payload: html });
    },
    [dispatch]
  );

  useEffect(() => {
    if (localStorage) {
      const item = localStorage.getItem(LOCAL_STORAGE_KEY);

      if (item) {
        dispatch({ type: LowLowActions.GET_VALUE_FROM_STORAGE, payload: item });
      }
    }
  }, []);

  useEffect(() => {
    if (localStorage) {
      localStorage.setItem(LOCAL_STORAGE_KEY, value);
    }
  }, [value]);

  useEffect(() => {
    setHTML(isUpper ? value.toUpperCase() : value.toLowerCase());
  }, [value, isUpper]);

  const onSubmit = (e: React.SyntheticEvent): void => e.preventDefault();
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void =>
    dispatch({ type: LowLowActions.SET_VALUE, payload: e.target.value });
  const onToggle = () => dispatch({ type: LowLowActions.SET_UPPER });
  const onCopy = () =>
    copyContent(isUpper ? value.toUpperCase() : value.toLowerCase());

  return [
    { isUpper, value, converted },
    {
      onToggle,
      onChange,
      onSubmit,
      onCopy,
    },
  ] as const;
};
