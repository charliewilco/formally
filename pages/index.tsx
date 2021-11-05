import Head from "next/head";
import { useState } from "react";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@reach/disclosure";
import { FormattedOutput } from "../lib";
import { Form } from "../components/form";
import { Output } from "../components/output";
import { Arrow } from "../components/disclosure-arrow";
import { Marker } from "../components/markdown";
import { Twitter, Globe } from "../components/icons";

const TWITTER = "https://twitter.com/charlespeters?lang=en";
const WEBSITE = "https://charliewil.co";

const IndexPage = () => {
  const [formattedOutput, setFormattedOutput] = useState<FormattedOutput | null>(
    null
  );
  return (
    <div className="outer">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/Aa.png" />
        <meta name="application-name" content="Formally" />
        <meta name="theme-color" content="#063651" />
        <title>Formally</title>
      </Head>
      <header>
        <Marker />
        <div>
          <h1>Formally</h1>
          <p>
            A text formatter like every other one. Apply any number of transforms to
            a given piece of text.
          </p>
        </div>
      </header>
      <main>
        <div>
          <Disclosure defaultOpen>
            <DisclosureButton className="disclosure-button">
              <span className="label">Input</span>
              <Arrow />
            </DisclosureButton>
            <DisclosurePanel>
              <Form onSubmit={setFormattedOutput} />
            </DisclosurePanel>
          </Disclosure>
        </div>
        <div>
          <Disclosure defaultOpen>
            <DisclosureButton className="disclosure-button">
              <span className="label">Output</span>
              <Arrow />
            </DisclosureButton>
            <DisclosurePanel>
              <Output converted={formattedOutput} />
            </DisclosurePanel>
          </Disclosure>
        </div>
      </main>
      <footer>
        <p>© 2021 Charlie Peters, All rights reserved.</p>
        <div className="links">
          <a href={TWITTER} title="Twitter link" target="_blank" rel="noreferrer">
            <Twitter />
          </a>
          <a href={WEBSITE} title="Twitter link" target="_blank" rel="noreferrer">
            <Globe />
          </a>
        </div>
      </footer>
      <style jsx>
        {`
          footer,
          header,
          main {
            width: 100%;
          }

          header {
            padding-top: 1rem;
            display: flex;
            align-items: center;
            margin-bottom: 2rem;
          }

          header p {
            font-size: small;
            opacity: 0.75;
          }

          header > div {
            margin-left: 1rem;
          }

          h1 {
            font-weight: 700;
            font-size: 1.125rem;
            margin-bottom: 0.5rem;
            font-family: var(--monospace);
          }

          header,
          footer {
            flex: 0;
          }

          main {
            flex: 1;
            display: grid;
            gap: 2rem;
            grid-template-columns: repeat(12, minmax(0, 1fr));
            margin-bottom: 2rem;
          }

          main > div {
            grid-column: span 12 / span 12;
          }

          footer {
            padding: 1rem 0;
            font-family: var(--monospace);
            font-size: small;
            text-align: center;
          }

          .links {
            order: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            margin-bottom: 1rem;
          }

          footer p {
            width: 100%;
            opacity: 0.75;
            margin-bottom: 1rem;
          }

          footer a {
            width: 1rem;
            height: 1rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }

          footer a:first-of-type {
            margin-right: 1rem;
          }

          .outer {
            max-width: 68rem;
            margin-left: auto;
            margin-right: auto;
            padding-left: 0.5rem;
            padding-right: 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            min-height: 100vh;
          }

          :global(.sr-only) {
            border: 0;
            clip: rect(0 0 0 0);
            height: 1px;
            margin: -1px;
            overflow: hidden;
            padding: 0;
            position: absolute;
            width: 1px;

            /* https://medium.com/@jessebeach/beware-smushed-off-screen-accessible-text-5952a4c2cbfe */
            white-space: nowrap;
            word-wrap: normal;
          }

          :global(.disclosure-button) {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            background: none;
            border: 0;
            color: inherit;
            margin-bottom: 1rem;
          }

          @media (min-width: 768px) {
            main > div {
              grid-column: span 6 / span 6;
            }
          }
        `}
      </style>
    </div>
  );
};

export default IndexPage;
