import React from 'react';
import '../endGame/EndGameStyle.css';

const OverGame = ({ text, click, word }) => {
  return (
    <div className='containerEndGame'>
      <h1 className='titleEndGame'>Game Over</h1>
      <p>
        The Word is: <span>{word}</span>
      </p>
      <button onClick={click}>{text}</button>
    </div>
  );
};

export default OverGame;
