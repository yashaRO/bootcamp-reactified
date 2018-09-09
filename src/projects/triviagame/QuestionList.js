import React from 'react';

const QuestionList = ({ answerSet = [], handleClick }) => {
  const answerSetLength = answerSet.length;
  const arr = new Array(answerSetLength).fill(true);
  const getIndex = () => Math.floor(Math.random() * answerSetLength);

  return (
    <div className="answers">
      {answerSet.map(() => {
        let randomAnswer;
        while (!randomAnswer) {
          let index = getIndex();
          if (arr[index]) {
            randomAnswer = answerSet[index];
            arr[index] = false;
          }
        }
        return (
          <p onClick={() => handleClick(randomAnswer)} key={randomAnswer.answer}>{randomAnswer.answer}</p>
        )
      })}
    </div>
  )
};

export default QuestionList;
