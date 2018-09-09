import React from 'react';
import QuestionList from './QuestionList';

const GameBody = ({ startGame, isStarted, isFinished, score, answers, handleClick }) => (
  <div className="triviagame-body">
    {isFinished
      ? <p>Fam, You got a {score}</p>
      : !isStarted
        ? (<p onClick={startGame}>Click To Start</p>)
        : <QuestionList answerSet={answers} handleClick={handleClick} />
    }
  </div>
);

export default GameBody;
