import React from 'react';
import '../endGame/EndGameStyle.css';

const OverGame = ({ text, click, word, englishWord }) => {
  console.log(englishWord);
  return (
    <div className='containerEndGame'>
      <h1 className='titleEndGame'>Game Over</h1>
      <p>
        {englishWord ? 'The word is: ' : 'Le mot est: '} <span>{word}</span>
      </p>
      <button onClick={click}>{text}</button>
    </div>
  );
};

export default OverGame;
