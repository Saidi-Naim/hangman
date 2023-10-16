import React from 'react';
import './HomePageStyle.css';
import hangManImg from '../../assets/hangmanHome.png';
import FrenchApi from '../frenchApiWord/FrenchApi';
import EnglishApiWord from '../englishApiWord/EnglishApiWord';

const HomePage = ({ englishWord, frenchWord, englishWords, frenchWords }) => {
  return (
    <>
      <div className='containerHome'>
        <div className='containerImgHomePage'>
          <img className='hangmanImg' src={hangManImg} alt='hangman Image' />
        </div>
        <div className='contentHome'>
          <div className='containerTitleHome'>
            <span className='first'>The</span>
            <span className='second'>Hangman</span>
          </div>
          <div className='containerButtonHome'>
            <button style={{ display: frenchWord || englishWord ? 'none' : 'block' }} className='buttonLanguage' onClick={frenchWords}>
              Français
            </button>
            {frenchWord ? <FrenchApi frenchWord={frenchWord} englishWord={englishWord} /> : null}
            <button style={{ display: frenchWord || englishWord ? 'none' : 'block' }} className='buttonLanguage' onClick={englishWords}>
              English
            </button>
            {englishWord ? <EnglishApiWord englishWord={englishWord} /> : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
