"use client";
import React, { useState } from "react";

const MathQuiz = () => {
  const [num1, setNum1] = useState(Math.floor(100 + Math.random() * 900));
  const [num2, setNum2] = useState(Math.floor(100 + Math.random() * 900));
  const [operator, setOperator] = useState(
    Math.random() > 0.5 ? "+" : "-"
  );
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState("");

  const correctAnswer = operator === "+" ? num1 + num2 : num1 - num2;

  const checkAnswer = () => {
    if (parseInt(answer) === correctAnswer) {
      setFeedback("✅ Correct!");
    } else {
      setFeedback(`❌ Incorrect. The answer is ${correctAnswer}.`);
    }
  };

  const nextQuestion = () => {
    setNum1(Math.floor(0 + Math.random() * 900));
    setNum2(Math.floor(0 + Math.random() * 900));
    setOperator(Math.random() > 0.5 ? "+" : "-");
    setAnswer("");
    setFeedback("");
  };

  return (
    <div className="flex flex-col items-center gap-3 p-6 border rounded-xl shadow-md max-w-sm mx-auto mt-10">
      <h2 className="text-xl font-bold">3-Digit Math Quiz</h2>
      <p className="text-lg">
        {num1} {operator} {num2} = ?
      </p>
      <input
        type="number"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="Enter your answer"
        className="border rounded p-2 w-40 text-center"
      />
      <div className="flex gap-2">
        <button
          onClick={checkAnswer}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Check
        </button>
        <button
          onClick={nextQuestion}
          className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
        >
          Next
        </button>
      </div>
      {feedback && <p className="text-lg mt-2">{feedback}</p>}
    </div>
  );
};

export default MathQuiz;
