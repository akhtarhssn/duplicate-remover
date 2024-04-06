import React from "react";

const InputForm = ({ inputText, handleInputChange, removeDuplicates }) => {
  return (
    <div className="flex justify-center items-center w-full text_area_sidebar">
      <div className="w-full">
        <h1 className="text-4xl font-bold text-center mb-10">
          Duplicate word checker
        </h1>

        <form className="" onSubmit={handleInputChange}>
          <div>
            <textarea
              className="focus:outline-none border-2 border-gray-300 rounded-xl w-full p-5 text-gray-500 font-medium focus:text-gray-600 hover:text-gray-600 bg-gray-100"
              name="content"
              id="content"
              cols="30"
              rows="10"
              placeholder="Paste your content here..."
              value={inputText}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <div className="text-right mt-2">
            <input
              type="submit"
              value="Check"
              className="font-semibold text-xl cursor-pointer bg-blue-500 px-10 py-2.5 rounded-xl text-white hover:bg-blue-600 duration-300"
              onClick={removeDuplicates}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default InputForm;
