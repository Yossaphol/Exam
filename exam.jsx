// src/components/Exam.js
import React, { useState } from 'react';
import Question from './question';

const Exam = ({ numQuestions }) => {
  const getRandomNumber = () => Math.floor(Math.random() * 10) + 1; // Adjust range as needed

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState(Array(numQuestions).fill(''));
  const [score, setScore] = useState(null);

  const questions = Array.from({ length: numQuestions }, (_, index) => {
    const firstNumber = getRandomNumber();
    const secondNumber = getRandomNumber();
    const answer = firstNumber + secondNumber;

    return {
      id: index,
      firstNumber,
      secondNumber,
      answer,
    };
  });

  const handleAnswerChange = (index, value) => {
    const newAnswers = [...userAnswers];
    newAnswers[index] = value;
    setUserAnswers(newAnswers);
  };

  const calculateScore = () => {
    const newScore = questions.reduce((totalScore, question, index) => {
      const userAnswer = parseInt(userAnswers[index], 10);
      return question.answer === userAnswer ? totalScore + 1 : totalScore;
    }, 0);

    setScore(newScore);
  };

  const handleNext = () => {
    if (currentQuestionIndex < numQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // User has reached the end of the questions, handle submission or any other logic.
      calculateScore();
    }
  };

  return (
    <div>
      <h2>Math Exam</h2>
      <Question
        key={questions[currentQuestionIndex].id}
        firstNumber={questions[currentQuestionIndex].firstNumber}
        secondNumber={questions[currentQuestionIndex].secondNumber}
        answer={questions[currentQuestionIndex].answer}
        onAnswerChange={(value) => handleAnswerChange(currentQuestionIndex, value)}
      />
      <button onClick={handleNext}>
        {currentQuestionIndex < numQuestions - 1 ? 'Next' : 'Submit'}
      </button>
      {score !== null && <p>Your score: {score}/{numQuestions}</p>}
    </div>
  );
};

export default Exam;
