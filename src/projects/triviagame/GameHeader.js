import React from 'react';

const GameHeader = ({ isStarted, isFinished, question }) => (
  <div className="triviagame-header">
    <h1>Video Game Trivia</h1>
    {isFinished
      ? 'Score'
      : (
        <React.Fragment>
          <h3>Time</h3>
          <h2>{isStarted ? question : "Question"}</h2>
        </React.Fragment>
      )}
  </div>
);

export default GameHeader;
