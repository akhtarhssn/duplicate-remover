import { useState } from "react";
import { IoClipboardOutline } from "react-icons/io5";

const CopyArea = ({ outputText }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(outputText)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500); // Reset copied state after 1.5 seconds
      })
      .catch((error) => console.error("Failed to copy:", error));
  };

  return (
    <div className="rounded-xl border-gray-400 mt-4">
      <div className="flex justify-between items-center w-full bg-gray-800 p-5 rounded-tl-xl rounded-tr-xl text-gray-400">
        <p className="text-sm">Result</p>
        <div className="flex items-center gap-2 capitalize text-sm">
          <IoClipboardOutline />
          <button onClick={copyToClipboard}>
            {copied ? "Copied!" : "Copy result"}
          </button>
        </div>
      </div>
      <div className="bg-black p-5 rounded-bl-xl rounded-br-xl text-gray-300">
        {outputText}
      </div>
    </div>
  );
};

export default CopyArea;
