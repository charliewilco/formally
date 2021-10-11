import { useCallback } from "react";

export const useCopy = () => {
  return useCallback(async (value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      console.log("Copied to clipboard");
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  }, []);
};
