import InputForm from "./Components/InputForm";
import CopyArea from "./Components/CopyArea";
import { useState } from "react";

const DuplicateRemover = () => {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");

  const handleInputChange = (event) => {
    event.preventDefault();
    setInputText(event.target.value);
  };

  const removeDuplicates = () => {
    const words = inputText.split(/[ ,]+/); // Split text by spaces and commas
    const uniqueWords = [...new Set(words)]; // Remove duplicates using Set
    const result = uniqueWords.join(" "); // Join unique words back into a string
    setOutputText(result);
  };

  return (
    <div className="max-w-4xl mx-auto p-5 md:p-10 lg:p-14 h-full lg:min-h-screen flex justify-center items-center">
      <div className="w-full">
        <InputForm
          inputText={inputText}
          handleInputChange={handleInputChange}
          removeDuplicates={removeDuplicates}
        />
        <CopyArea outputText={outputText} />
      </div>
    </div>
  );
};

export default DuplicateRemover;
