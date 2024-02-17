import React, { useState } from 'react';
import './test.css';
import Clock from './clock';
import ImgClock from './assets/clock.png';
import Question from './question';

function Test({ numQuestions }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState(Array(numQuestions).fill(''));
  const [score, setScore] = useState(null);

  // Define listItems and related state
  const [activeItem, setActiveItem] = useState(null);

  const listItems = ['Item 1', 'Item 2', 'Item 3'];

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

  const currentQuestion = questions[currentQuestionIndex];

  const handleNext = () => {
    if (currentQuestionIndex < numQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // User has reached the end of the questions, handle submission or any other logic.
      calculateScore();
    }
  };

  const handleItemClick = (index) => {
    // Set the active item index
    setActiveItem(index);
  };

  return (
    <div>
      <section className="main">
        <nav>
          <h3>PROEDGE</h3>
          <ul>
            <li>
              <h3>USER</h3>
            </li>
          </ul>
        </nav>
        <div className="content">
          <div className="box">
            <div className="c1">
              <div className="time">
                <div className="clock">
                  <img src={ImgClock} alt="" />
                </div>
                <Clock />
              </div>
              <div className="submit">
                <a href="">Submit</a>
              </div>
            </div>
            <div className="c2">
            <div className="question">
            <h4>Question {currentQuestionIndex + 1} of {numQuestions}</h4>
            {currentQuestion && (
              <Question
                firstNumber={currentQuestion.firstNumber}
                secondNumber={currentQuestion.secondNumber}
                answer={currentQuestion.answer}
                onAnswerChange={(value) => handleAnswerChange(currentQuestionIndex, value)}
              />
            )}
            <div className="ans">
              <h3>Your Answer :</h3>
              <input
                type="text"
                className="text"
                placeholder="Your answer..."
                onChange={(e) => handleAnswerChange(currentQuestionIndex, e.target.value)}
              />
            </div>
              </div>
            </div>
            <div className="c3">
              <div className="num">
                <nav>
                  <ul>
                    {listItems.map((item, index) => (
                      <li
                        key={index}
                        className={index === activeItem ? 'active' : ''}
                        onClick={() => handleItemClick(index)}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Helper function for getRandomNumber
const getRandomNumber = () => Math.floor(Math.random() * 10) + 1;

export default Test;
