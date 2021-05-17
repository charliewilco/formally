import { useState, useEffect, useCallback } from "react";
import Head from "next/head";
import remark from "remark";
import html from "remark-html";

const LOCAL_STORAGE_KEY = "lowerCaseValue";

const makeHTML = (value: string) => {
  const parsed = remark().use(html).processSync(value);

  return parsed;
};

function usePersistedState() {
  const [value, setValue] = useState<string>("");
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

  return [value, setValue] as const;
}

function useLowLow() {
  const [value, setValue] = usePersistedState();
  const [isUpper, setIsUpper] = useState(false);
  const [converted, setConverted] = useState("");

  useEffect(() => {
    const v = isUpper ? value.toUpperCase() : value.toLowerCase();
    const html = makeHTML(v);
    setConverted(html.toString("utf8"));
  }, [value, isUpper]);

  const onSubmit = useCallback((e: React.SyntheticEvent): void => {
    e.preventDefault();
  }, []);

  const onChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setValue(e.target.value);
  }, []);

  const onToggle = useCallback(() => {
    setIsUpper((prev) => !prev);
  }, []);

  return [
    { isUpper, value, converted },
    {
      onToggle,
      onChange,
      onSubmit,
    },
  ] as const;
}

async function copyContent(value: string) {
  try {
    await navigator.clipboard.writeText(value);
    console.log("Copied to clipboard");
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
}

function createMarkup(__html: string) {
  return { __html };
}

export default function IndexPage() {
  const [state, actions] = useLowLow();

  const handleCopy = () => {
    copyContent(
      state.isUpper ? state.value.toUpperCase() : state.value.toLowerCase()
    );
  };

  return (
    <div className="px-2">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="application-name" content="Low Low" />
        <meta name="theme-color" content="#063651" />

        <title>LowLow</title>
      </Head>
      <header className="mb-6 py-3 container container-md mx-auto border-b-2 border-gray-700  font-black ">
        <h1 className="text-2xl text-red-300">LowLow</h1>
      </header>
      <main className="py-3 container container-md mx-auto">
        <div className="md:grid grid-cols-2 gap-4">
          <form className="mb-6" onSubmit={actions.onSubmit}>
            <div className="relative mb-6">
              <textarea
                className="w-full rounded-md block border border-gray-700 py-4 px-2 text-white bg-gray-900 resize-none"
                id="area"
                style={{
                  minHeight: 300,
                }}
                value={state.value}
                onChange={actions.onChange}
              />
              <span className="absolute text-xxs top-0 right-0 p-3">
                {state.value.length}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center w-3/4">
                <div className="flex items-center mr-4">
                  <svg width="25" height="15.38461538" viewBox="0 0 208 128">
                    <rect
                      width="198"
                      height="118"
                      x="5"
                      y="5"
                      ry="10"
                      stroke="rgba(30, 184, 235, 0.35)"
                      strokeWidth="10"
                      fill="none"
                    />
                    <path
                      fill="rgba(30, 184, 235, 0.35)"
                      d="M30 98v-68h20l20 25 20-25h20v68h-20v-39l-20 25-20-25v39zM155 98l-30-33h20v-35h20v35h20z"
                    />
                  </svg>
                  <label htmlFor="area" className="ml-3">
                    Convert
                  </label>
                </div>
                <label className="custom-label flex">
                  <div className="bg-white shadow w-6 h-6 p-1 flex justify-center items-center mr-2">
                    <input
                      type="checkbox"
                      className="hidden"
                      onChange={actions.onToggle}
                      checked={state.isUpper}
                    />

                    <svg
                      className="hidden w-4 h-4 text-red-600 pointer-events-none"
                      viewBox="0 0 172 172">
                      <g
                        fill="none"
                        strokeWidth="none"
                        strokeMiterlimit={10}
                        fontFamily="none"
                        fontWeight="none"
                        fontSize="none"
                        textAnchor="none"
                        style={{ mixBlendMode: "normal" }}>
                        <path d="M0 172V0h172v172z" />
                        <path
                          d="M145.433 37.933L64.5 118.8658 33.7337 88.0996l-10.134 10.1341L64.5 139.1341l91.067-91.067z"
                          fill="currentColor"
                          strokeWidth={1}
                        />
                      </g>
                    </svg>
                  </div>
                  <span className="select-none">Uppercase?</span>
                </label>
              </div>
              <button
                className="bg-red-600 hover:bg-red-900 text-white font-black py-2 px-4 rounded"
                type="submit">
                Convert
              </button>
            </div>
          </form>

          <div className="mb-6 ">
            <div className="shadow-sm bg-gray-900 p-3 text-sm font-bold relative">
              <button
                className="absolute bg-red-600 hover:bg-red-900 text-xs font-black rounded-full py-3 h-12 w-12 transition transition-transform duration-300 ease-in-out transform hover:scale-75 hover:-rotate-45"
                style={{
                  top: -20,
                  right: -20,
                }}
                onClick={handleCopy}>
                Copy
              </button>
              <div
                id="content"
                className="__markdown text-lg"
                dangerouslySetInnerHTML={createMarkup(state.converted)}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
