import { AppProps } from "next/app";
import "@reach/listbox/styles.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Component {...pageProps} />
      <style jsx global>{`
        :root {
          --monospace: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas,
            Liberation Mono, monospace;
          --sans-serif: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
            Helvetica, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
            "Segoe UI Symbol";
          --base-spacing: 1rem;
          --base-border: 1px;
          --bg: #f7f7f7;
          --fg: #3c4043;
          --surface: #fff;
          --bg-offset: rgb(211, 211, 211);
          --highlight: #0f76ff;
          --highlight-hover: #5486a4;
        }

        * {
          margin: 0;
          padding: 0;
        }

        *,
        *::before,
        *::after {
          box-sizing: inherit;
        }

        html {
          box-sizing: border-box;
          text-size-adjust: 100%;
          -webkit-tap-highlight-color: transparent;
          background: var(--bg);
          color: var(--fg);
          font: 400 100% / 1.3 var(--sans-serif);
        }

        body {
          min-height: 100vh;
          scroll-behavior: smooth;
          text-rendering: optimizeSpeed;
        }

        aside,
        figcaption,
        figure,
        hgroup,
        main,
        menu,
        details {
          display: block;
        }

        [hidden],
        template {
          display: none;
        }

        audio,
        canvas,
        progress,
        video {
          display: inline-block;
          vertical-align: baseline;
        }

        audio:not([controls]) {
          display: none;
          height: 0;
        }

        abbr[title] {
          border-bottom-width: calc(var(--base-border) / 2);
          border-bottom-style: dotted;
        }

        b,
        strong {
          font-weight: bold;
        }

        i,
        em {
          font-style: italic;
        }

        a {
          background-color: transparent;
          text-decoration: objects;
          color: var(--highlight);
        }

        small {
          font-size: 80%;
        }

        figure {
          margin: 0;
        }

        hr {
          border: 0;
          height: var(--base-border);
          overflow: visible;
        }

        img {
          border-style: none;
          font-style: italic;
          vertical-align: middle;
        }

        svg:not(:root) {
          overflow: hidden;
        }

        pre {
          overflow: auto;
        }

        code,
        pre {
          font-size: 100%;
          font-family: var(--monospace);
        }

        table {
          border-collapse: collapse;
        }

        textarea {
          white-space: revert;
        }

        button,
        input,
        optgroup,
        select,
        textarea {
          margin: 0;
          font-family: inherit;
        }

        select,
        button {
          text-transform: none;
        }

        button {
          overflow: visible;
        }

        fieldset {
          padding: 0.375rem 0.75rem 0.625rem;
        }

        legend {
          color: inherit;
          display: table;
          max-width: 100%;
          padding: 0;
          white-space: normal;
        }

        @media (prefers-color-scheme: dark) {
          :root {
            --fg: #fafafa;
            --bg: #050505;
            --bg-offset: #111;
            --surface: #333;
          }
        }
      `}</style>
    </div>
  );
}
