import { Clipboard } from "./icons";
import { FormattedOutput, FORMAT_MAP } from "../lib";
import { StateMap } from "./state-map";
import { useCopy } from "./useCopy";

const createMarkup = (__html: string) => ({ __html });

interface OutputProps {
  converted: FormattedOutput | null;
}

export const Output: React.VFC<OutputProps> = ({ converted }) => {
  const [message, onCopy] = useCopy();
  return (
    <div className="">
      <div aria-live="polite">
        {message && <div className="notification">{message}</div>}
      </div>
      {converted !== null && (
        <div>
          <div className="converted">
            <button
              aria-label="Copy to Clipboard"
              onClick={() => onCopy(converted.formatted)}>
              <Clipboard />
            </button>
            <div
              id="content"
              className="__markdown"
              dangerouslySetInnerHTML={createMarkup(converted.formatted)}
            />
          </div>

          <StateMap map={FORMAT_MAP} transformedStates={converted.states} />
        </div>
      )}
      <style jsx>{`
        @keyframes bounceInUp {
          0%,
          60%,
          75%,
          90%,
          to {
            animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
          }

          0% {
            opacity: 0;
            transform: translate3d(0, 3000px, 0) scaleY(5);
          }

          60% {
            opacity: 1;
            transform: translate3d(0, -20px, 0) scaleY(0.9);
          }

          75% {
            transform: translate3d(0, 10px, 0) scaleY(0.95);
          }

          90% {
            transform: translate3d(0, -5px, 0) scaleY(0.985);
          }

          to {
            transform: translateZ(0);
          }
        }

        .converted {
          position: relative;
          padding: 1rem;
          background: var(--surface);
          box-shadow: 0 1px 1px hsl(0deg 0% 0% / 0.075),
            0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075),
            0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075);
          margin-bottom: 2rem;
        }

        [aria-label="Copy to Clipboard"] {
          position: absolute;
          top: 0.5rem;
          right: 0.5rem;
          border: 0;
          color: inherit;
          background: none;
          margin: auto;
        }

        button {
          width: 1.25rem;
          height: 1.25rem;
        }

        [aria-live="polite"] {
          position: fixed;
          top: 1rem;
          left: 0;
          right: 0;
          margin: 1rem auto;
          width: 100%;
          max-width: 33ch;
        }

        .notification {
          background: var(--surface);
          color: var(--highlight);
          font-weight: 400;
          text-align: center;
          padding: 0.5rem;
        }

        .converted,
        .notification {
          box-shadow: 0 1px 1px hsl(0deg 0% 0% / 0.075),
            0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075),
            0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075);
        }

        @media (prefers-color-scheme: dark) {
          .converted,
          .notification {
            box-shadow: 0 1px 1px hsl(0deg 0% 0% / 0.075),
              0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075),
              0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075);
          }

          .notification {
            background: var(--bg-offset) !important;
          }
        }

        @media (prefers-reduced-motion: no-preference) {
          .notification {
            animation: bounceInUp 1s ease-in-out;
          }
        }
      `}</style>
    </div>
  );
};
