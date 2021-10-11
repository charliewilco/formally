import Head from "next/head";
import html from "remark-html";
import { useLowLow } from "../hook";

const makeHTML = async (value: string) => {
  const { remark } = await import("remark");
  const parsed = remark().use(html).processSync(value);

  return parsed.toString("utf8");
};

const createMarkup = (__html: string) => ({ __html });

const copyButtonStyle = {
  top: -20,
  right: -20,
};

const IndexPage = () => {
  const [{ value, isUpper, converted }, actions] = useLowLow(makeHTML);

  return (
    <div className="px-2 text-white min-h-screen bg-black">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="application-name" content="Low Low" />
        <meta name="theme-color" content="#063651" />

        <title>LowLow</title>
      </Head>
      <header className="container py-3 mx-auto mb-6 font-black border-b-2 border-gray-700 container-md ">
        <h1 className="text-2xl text-red-300">LowLow</h1>
      </header>
      <main className="container py-3 mx-auto container-md">
        <div className="md:grid grid-cols-2 gap-4">
          <form className="mb-6" onSubmit={actions.onSubmit}>
            <div className="relative mb-6">
              <textarea
                className="h-64 block w-full px-2 font-mono py-4 text-white bg-gray-900 border border-gray-700 resize-none rounded-md"
                id="area"
                value={value}
                onChange={actions.onChange}
              />
              <span className="absolute top-0 right-0 p-3 text-xxs">
                {value.length}
              </span>
            </div>
            <div className="flex items-center justify-between">
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
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="
                      rounded
                      bg-gray-200
                      border-transparent
                      focus:border-transparent focus:bg-gray-200
                      text-red-600
                      focus:ring-1 focus:ring-offset-2 focus:ring-gray-500
                      mr-2"
                    onChange={actions.onToggle}
                    checked={isUpper}
                  />
                  <span className="select-none">Uppercase?</span>
                </label>
              </div>
              <button
                className="px-4 py-2 font-bold text-white bg-red-600 rounded hover:bg-red-900"
                type="submit">
                Convert
              </button>
            </div>
          </form>

          <div className="mb-6 ">
            <div className="relative p-3 text-sm font-bold bg-gray-900 shadow-sm">
              <button
                className="absolute w-12 h-12 py-3 text-xs font-black bg-red-600 rounded-full hover:bg-red-900 transition transition-transform duration-300 ease-in-out transform hover:scale-75 hover:-rotate-45"
                style={copyButtonStyle}
                onClick={actions.onCopy}>
                Copy
              </button>
              <div
                id="content"
                className="text-lg __markdown"
                dangerouslySetInnerHTML={createMarkup(converted)}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default IndexPage;
