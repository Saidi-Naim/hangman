import React from 'react';
import './HomePageStyle.css';
import hangManImg from '../../assets/hangmanHome.png';

const HomePage = ({ englishWord, frenchWord, englishWords, frenchWords }) => {
  return (
    <>
      <div className='containerHome'>
        <div className='contentHome'>
          <div className='containerTitleHome'>
            <span className='first'>The</span>
            <span className='second'>Hangman</span>
          </div>
          <div className='containerButtonHome'>
            <button style={{ display: frenchWord || englishWord ? 'none' : 'block' }} className='buttonLanguage' onClick={frenchWords}>
              Français
            </button>
            {frenchWord ? <FrenchApi englishWord={englishWord} /> : null}
            <button style={{ display: frenchWord || englishWord ? 'none' : 'block' }} className='buttonLanguage' onClick={englishWords}>
              English
            </button>
            {englishWord ? <EnglishApi englishWord={englishWord} /> : null}
          </div>
        </div>
        <div className='containerImgHomePage'>
          <img className='hangmanImg' src={hangManImg} alt='hangman Image' />
        </div>
      </div>
    </>
  );
};

export default HomePage;
