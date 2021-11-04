import { useReducer, useCallback } from "react";

export enum FormatterActions {
  SET_FORMATTER,
  ADD_FORMATTER,
  REMOVE_FORMATTER,
}

export type Action =
  | {
      type: FormatterActions.SET_FORMATTER;
      position: number;
      transformerKey: string;
    }
  | {
      type: FormatterActions.ADD_FORMATTER;
    }
  | {
      type: FormatterActions.REMOVE_FORMATTER;
      position: number;
    };

const reducer: React.Reducer<string[], Action> = (formatters, action) => {
  switch (action.type) {
    case FormatterActions.ADD_FORMATTER:
      return [...formatters, "0"];
    case FormatterActions.REMOVE_FORMATTER: {
      const clone = [...formatters];
      clone.splice(action.position, 1);
      return [...clone];
    }
    case FormatterActions.SET_FORMATTER: {
      const clone = [...formatters];
      clone[action.position] = action.transformerKey;
      return [...clone];
    }
    default:
      throw new Error("Must specify action type");
  }
};

export const useFormatterReducer = () => {
  const [formatters, dispatch] = useReducer(reducer, ["0"]);

  const changeSelected = useCallback(
    (position: number) => {
      return (transformerKey: string) =>
        dispatch({ type: FormatterActions.SET_FORMATTER, position, transformerKey });
    },
    [dispatch]
  );

  const addFormatter = useCallback(() => {
    dispatch({ type: FormatterActions.ADD_FORMATTER });
  }, []);

  const removeFormatter = useCallback(
    (position: number) => () => {
      dispatch({ type: FormatterActions.REMOVE_FORMATTER, position });
    },
    []
  );

  return [
    formatters,
    {
      addFormatter,
      changeSelected,
      removeFormatter,
    },
  ] as const;
};
