import { useEffect } from "react";

const LOCAL_STORAGE_KEY = "lowerCaseValue";

export const usePersistedStorage = (
  value: string,
  initialSet: (value: string) => void,
  key: string = LOCAL_STORAGE_KEY
) => {
  useEffect(() => {
    if (localStorage) {
      const item = localStorage.getItem(key);

      if (item) {
        initialSet(item);
      }
    }
  }, [initialSet, key]);

  useEffect(() => {
    if (localStorage) {
      localStorage.setItem(key, value);
    }
  }, [key, value]);
};
