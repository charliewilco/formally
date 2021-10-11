import { useEffect, useCallback } from "react";
import { useCopy } from "./useCopy";
import { usePersistedStorage } from "./useLocalStorage";
import { LowLowActions, useLowLowReducer } from "./useLowLowReducer";

type HTMLParser = (value: string) => Promise<string>;

export const useLowLow = (parser: HTMLParser) => {
  const copyContent = useCopy();
  const [{ isUpper, value, converted }, dispatch] = useLowLowReducer();

  const setHTML = useCallback(
    async (value: string) => {
      const html = await parser(value);
      dispatch({ type: LowLowActions.SET_CONVERTED, payload: html });
    },
    [dispatch]
  );

  usePersistedStorage(value, (item: string) =>
    dispatch({ type: LowLowActions.GET_VALUE_FROM_STORAGE, payload: item })
  );

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
