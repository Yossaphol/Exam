import React from 'react';
import './question.css';

const Question = ({ firstNumber, secondNumber, answer, onAnswerChange }) => {
    // Check if questions array is not empty
    if (!questions || questions.length === 0) {
      return null; // or handle the case when questions array is empty
    }
  
    return (
      <div>
        <p>{`What is the sum of ${firstNumber} and ${secondNumber}?`}</p>
        {/* For simplicity, let's assume an input field for the answer */}
        <input
          type="text"
          placeholder="Your Answer"
          onChange={(e) => onAnswerChange(e.target.value)}
        />
      </div>
    );
  };

export default Question;
