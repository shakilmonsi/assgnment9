import React, { useState } from "react";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Option from "../Option/Option";

const FileQuestion = ({ quizQuestion }) => {
  const { question, options, id, correctAnswer } = quizQuestion;
  const [correct, setCorrect] = useState(null);
  const watchCorrectAns = () => {
    setCorrect(!correct);
  };
  return (
    <div>
      <div className="relative w-11/12 mx-auto mt-8 md:w-3/4 md:p-10 p-3 rounded-xl bg-indigo-600">
        <div className="py-4 mb-3">
          <h4 className="font-mono  md:font-semibold mt-4 text-start md:text-center text-2xl">
            {question}
          </h4>
          <span
            onClick={() => watchCorrectAns()}
            className="absolute top-4 right-4 cursor-pointer text-orange-800 text-2xl"
          >
            <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {options.map((option) => (
            <Option
              quizQuestion={quizQuestion}
              key={option}
              id={id}
              question={question}
              option={option}
            ></Option>
          ))}
        </div>
        {correct ? (
          <h4 className=" text-center font-semibold font-mono mt-5 text-2xl">
            Correct Ans : {correctAnswer}
          </h4>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default FileQuestion;
