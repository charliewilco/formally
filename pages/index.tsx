import Head from "next/head";
import { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import { FormattedOutput } from "../lib";
import { Form } from "../components/form";
import { Output } from "../components/output";

const IndexPage = () => {
  const [formattedOutput, setFormattedOutput] = useState<FormattedOutput | null>(
    null
  );

  const handleSubmit = (cb: () => void) => {
    return (value: FormattedOutput) => {
      cb();
      setFormattedOutput(value);
    };
  };

  return (
    <div className="px-2 text-white min-h-screen bg-black">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="application-name" content="Low Low" />
        <meta name="theme-color" content="#063651" />

        <title>Formally</title>
      </Head>
      <header className="max-w-xl py-3 py-3 mx-auto mb-6 border-b-2 border-gray-700">
        <h1 className="text-xl text-amber-300 font-mono italic mb-2">formally</h1>
        <p className="text-sm">A text formatter like every other one.</p>
      </header>
      <main className="max-w-xl py-3 mx-auto">
        <div className="">
          <Disclosure defaultOpen>
            {({ open, close }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full py-2 text-sm font-medium text-left rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>Input</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "transform rotate-180" : ""
                    } w-5 h-5 text-white`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="pt-4 pb-2">
                  <Form onSubmit={handleSubmit(close)} />
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure defaultOpen>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full py-2 text-sm font-medium text-left rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>Output</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "transform rotate-180" : ""
                    } w-5 h-5 text-white`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="pt-4 pb-2">
                  <Output converted={formattedOutput} />
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </main>
    </div>
  );
};

export default IndexPage;
