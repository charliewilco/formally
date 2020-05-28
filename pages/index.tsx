import { useState, useEffect, useRef, useCallback } from "react";
import Head from "next/head";
import showdown from "showdown";

import Input from "../components/input";
import Content from "../components/content";

const LOCAL_STORAGE_KEY = "lowerCaseValue";

function useLowLow() {
  const showdownRef = useRef(new showdown.Converter());
  const [value, setValue] = useState("");
  const [isUpper, setIsUpper] = useState(false);
  const [converted, setConverted] = useState("");

  useEffect(() => {
    if (localStorage) {
      const item = localStorage.getItem(LOCAL_STORAGE_KEY);

      if (item) {
        setValue(item);
      }
    }
  }, []);

  useEffect(() => {
    if (localStorage) {
      localStorage.setItem(LOCAL_STORAGE_KEY, value);
    }
  }, [value]);

  useEffect(() => {
    const html = showdownRef.current.makeHtml(
      isUpper ? value.toUpperCase() : value.toLowerCase()
    );
    setConverted(html);
  }, [value, isUpper]);

  const onSubmit = useCallback((e: React.SyntheticEvent): void => {
    e.preventDefault();
  }, []);

  const onChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setValue(e.target.value);
  }, []);

  const onToggle = useCallback(() => {
    setIsUpper(prev => !prev);
  }, []);

  return [
    { isUpper, value, converted },
    {
      onToggle,
      onChange,
      onSubmit
    }
  ] as const;
}

export default function App() {
  const [
    { value, isUpper, converted },
    { onSubmit, onChange, onToggle }
  ] = useLowLow();

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="application-name" content="Low Low" />
        <meta name="theme-color" content="#063651" />

        <title>LowLow</title>
      </Head>
      <header className="mb-6 pt-3 px-3">
        <h1 className="text-xl font-700">LowLow</h1>
      </header>
      <main className="p-3 container-md mx-auto">
        <div className="md:grid grid-cols-2 gap-4">
          <Input
            value={value}
            onSubmit={onSubmit}
            onChange={onChange}
            checked={isUpper}
            onChecked={onToggle}
          />
          <Content
            content={converted}
            clipBoardValue={isUpper ? value.toUpperCase() : value.toLowerCase()}
          />
        </div>
      </main>
    </>
  );
}
