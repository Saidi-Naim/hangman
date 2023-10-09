import React, { useState, useEffect } from 'react';
import '../endGame/EndGameStyle.css';

const EndGame = ({ gameOver, text, click, word, titleEndGame, gameWin, englishWord }) => {
  console.log(englishWord);
  // Condition pour afficher un message de fin de jeu ou une interface
  if (gameOver || gameWin) {
    return (
      <div className='containerEndGame'>
        <h1 className='titleEndGame'>{titleEndGame}</h1>
        <p>
          {englishWord ? 'The word is: ' : 'Le mot est: '} <span>{word}</span>
        </p>
        <button onClick={click}>{text}</button>
      </div>
    );
  } else {
    // Si le jeu n'est pas encore terminé, vous pouvez renvoyer null ou tout autre contenu souhaité.
    return null;
  }
};

export default EndGame;
