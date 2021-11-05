import { useFormik } from "formik";
import { MinusCircle, PlusCircle } from "./icons";
import { FORMAT_MAP, FormattedOutput, tranformTextWithFormatters } from "../lib";
import { FormatSelect } from "./format-list";
import { useFormatterReducer } from "./useFormarterReducer";

interface FormProps {
  onSubmit(output: FormattedOutput): void;
}

export const Form: React.VFC<FormProps> = ({ onSubmit }) => {
  const [formatters, { addFormatter, changeSelected, removeFormatter }] =
    useFormatterReducer();
  const formik = useFormik({
    initialValues: {
      text: "",
    },
    onSubmit(values, actions) {
      onSubmit(tranformTextWithFormatters(values.text, formatters));
      actions.setFieldValue("text", values.text);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="textarea-wrapper">
        <textarea id="area" {...formik.getFieldProps("text")} />
        <div className="tray">
          <span className="count">{formik.values.text.length}</span>
        </div>
      </div>
      <div className="transform-header">
        <h3>Transforms to apply</h3>
        <button type="button" className="plus" onClick={addFormatter}>
          <PlusCircle />
        </button>
      </div>
      <aside>
        {formatters.map((value, index) => {
          return (
            <div key={index} className="selectx">
              <FormatSelect
                selected={value}
                onSelect={changeSelected(index)}
                map={FORMAT_MAP}
              />
              <button className="minus" onClick={removeFormatter(index)}>
                <MinusCircle />
              </button>
            </div>
          );
        })}
      </aside>
      <div className="tray">
        <button type="submit">Convert</button>
      </div>
      <style jsx>{`
        textarea {
          background-color: var(--bg);
          border: 0;
          border-radius: 0;
          transition: border 0.2s ease, color 0.2s ease;
          color: inherit;
          display: block;
          font-size: 0.875rem;
          line-height: 1.7;
          height: 100%;
          min-height: 6rem;
          outline: 0;
          padding: 0.5rem 0.75rem;
          resize: none;
          width: 100%;
        }

        textarea:focus {
        }

        .textarea-wrapper {
          border-radius: 0.5rem;
          overflow: hidden;
          background: var(--bg-offset);
          border: 1px solid rgba(255, 255, 255, 0.25);
          margin-bottom: 2rem;
        }

        button {
          color: inherit;
          appearance: none;
          background: none;
          border: 0;
          line-height: 1;
          cursor: pointer;
        }

        aside,
        .transform-header,
        .selectx {
          display: flex;
          align-items: center;
          justify-content: flex-start;
        }

        .transform-header {
          margin-bottom: 1rem;
        }

        .tray {
          padding: 0.5rem;
          display: flex;
          justify-content: flex-end;
        }
        .count {
          align-self: flex-end;
          font-family: var(--monospace);
        }

        .selectx {
          margin-right: 0.5rem;
          margin-bottom: 0.5rem;
        }

        .plus,
        .minus {
          margin-left: 0.5rem;
          width: 1rem;
          height: 1rem;
        }

        aside {
          flex-wrap: wrap;
        }

        h3 {
          font-weight: 400;
        }

        button[type="submit"] {
          background: var(--highlight);
          color: white;
          padding: 0.5rem 0.75rem;
          font-weight: 700;
          font-size: 1.125rem;
          border-radius: 0.25rem;
          transition: transform 0.2s linear, opacity 0.2s linear;
        }

        button[type="submit"]:hover {
          opacity: 0.5;
          transform: scale(0.875);
        }
      `}</style>
    </form>
  );
};
