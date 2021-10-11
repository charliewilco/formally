import { useFormik } from "formik";
import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/solid";
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
      <div className="relative mb-4">
        <textarea
          className="h-40 block w-full px-2 font-mono py-4 text-white bg-gray-900 border border-gray-700 resize-none rounded-md"
          id="area"
          {...formik.getFieldProps("text")}
        />
        <span className="absolute top-0 right-0 p-3 text-xs">
          {formik.values.text.length}
        </span>
      </div>

      <h3 className="mb-4 font-mono text-xs">Transforms to apply</h3>

      <aside className="grid grid-cols-3 gap-2 mb-4">
        {formatters.map((value, index) => {
          return (
            <div className="col-span-1 flex gap-2">
              <FormatSelect
                key={index}
                selected={value}
                onSelect={changeSelected(index)}
                map={FORMAT_MAP}
              />
              <button className="text-white" onClick={removeFormatter(index)}>
                <MinusCircleIcon className="w-5 h-5" />
              </button>
            </div>
          );
        })}
      </aside>
      <div className="flex items-center space-x-2 justify-end">
        <button
          className="px-4 py-1 font-bold text-white rounded"
          type="button"
          onClick={addFormatter}>
          <PlusCircleIcon className="w-5 h-5" />
        </button>
        <button
          className="px-4 py-1 font-bold text-gray-900 bg-amber-500 rounded hover:bg-amber-900 hover:text-white"
          type="submit">
          Convert
        </button>
      </div>
    </form>
  );
};
