import React, { Component } from 'react';
import GameHeader from './GameHeader';
import GameBody from './GameBody';
import { questions } from './constants';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      questions: questions,
      currentQuestion: {},
      isStarted: false,
      isFinished: false,
      score: 0
    }
  }

  componentDidUpdate = (prevProps, prevState, snapshot) => {
    const { isStarted, questions } = this.state;
    if (isStarted && !prevState.isStarted) {
      const unusedQuestions = questions.filter(({ used }) => !used);
      const index = Math.floor(Math.random() * unusedQuestions.length);
      const nextQuestion = unusedQuestions[index];
      questions[nextQuestion.qNo - 1].used = true;
      this.setState({
        currentQuestion: nextQuestion,
        questions
      })
    }
  };

  startGame = () => {
    if (this.state.isStarted) { return true; }
    return this.setState({ isStarted: true });
  }

  handleClick = answerObj => {
    const { score, questions } = this.state;
    const unusedQuestions = questions.filter(({ used }) => !used);
    const newStateObj = { score };

    answerObj.isTrue ? newStateObj.score += 10 : null;

    if (unusedQuestions.length) {
      const index = Math.floor(Math.random() * unusedQuestions.length);
      const nextQuestion = unusedQuestions[index];
      questions[nextQuestion.qNo - 1].used = true;
      newStateObj.currentQuestion = nextQuestion;
      newStateObj.questions = questions;
    } else {
      newStateObj.currentQuestion = {};
      newStateObj.isFinished = true;
    }

    this.setState({ ...newStateObj })
  };

  render() {
    const { isStarted, isFinished, score, currentQuestion } = this.state;

    return (
      <div className="triviagame">
        <GameHeader isStarted={isStarted} isFinished={isFinished} question={currentQuestion.question} />
        <GameBody
          startGame={this.startGame}
          isStarted={isStarted}
          isFinished={isFinished}
          score={score}
          answers={currentQuestion.answerSet}
          handleClick={this.handleClick}
        />
      </div>
    );
  }
}

export default App;
