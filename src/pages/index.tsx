import Head from "next/head";
import html from "remark-html";
import { Form } from "../components/form";
import { Output } from "../components/output";
import { useLowLow } from "../components/useLowLow";

const makeHTML = async (value: string) => {
  const { remark } = await import("remark");
  const parsed = remark().use(html).processSync(value);

  return parsed.toString("utf8");
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
          <Form
            value={value}
            isUpper={isUpper}
            onToggle={actions.onToggle}
            onSubmit={actions.onSubmit}
            onChange={actions.onChange}
          />
          <Output converted={converted} onCopy={actions.onCopy} />
        </div>
      </main>
    </div>
  );
};

export default IndexPage;
