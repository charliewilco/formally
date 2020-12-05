import * as React from "react";

async function copyContent(value: string) {
  try {
    await navigator.clipboard.writeText(value);
    console.log("Copied to clipboard");
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
}

const ClipboardButton: React.FC<{ value: string }> = ({ value }) => {
  const handleCopy = () => {
    copyContent(value);
  };
  return (
    <button
      className="absolute bg-red-600 hover:bg-red-900 text-xs font-black rounded-full py-3 h-12 w-12 transition transition-transform duration-300 ease-in-out transform hover:scale-75 hover:-rotate-45"
      style={{
        top: -20,
        right: -20,
      }}
      onClick={handleCopy}>
      Copy
    </button>
  );
};

export default ClipboardButton;
