import { useEffect, useRef, useState } from 'react';
import './App.css';
import structure from './assets/Union.png';
import rectangle from './assets/Rectangle5.png';
import corde from './assets/Rope.png';
import rond from './assets/Exclude.png';
import face from './assets/Face.png';
import body from './assets/Body.png';
import bras_gauche from './assets/Arm_left.png';
import bras_droit from './assets/Arm_right.png';
import jambe_gauche from './assets/Leg_left.png';
import jambe_droite from './assets/Leg_right.png';

function App() {
  const words = ['pomme', 'tokyo', 'banane', 'vent', 'soleil', 'celsius', 'sentiment', 'face', 'vogue'];

  const [wordLength, setWordLength] = useState(0);
  const [word, setWord] = useState('');
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [life, setLife] = useState(10);
  const [randomWordButtonIsActive, setRandomWordButtonIsActive] = useState(false);

  const handleClickLetter = (letter) => {
    if (!guessedLetters.includes(letter)) {
      setGuessedLetters([...guessedLetters, letter]);
      if (!word.includes(letter)) {
        setLife((prevLife) => prevLife - 1);
      }
    }
  };

  const chooseRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * words.length);
    const randomWord = words[randomIndex];
    setWord(randomWord);
    setWordLength(randomWord);
    setGuessedLetters([]);
    setLife(10);
    setRandomWordButtonIsActive(!randomWordButtonIsActive);
  };

  const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  const [gameOver, setGameOver] = useState(false);

  return (
    <>
      <main className='container'>
        <section className='hangmanContainer' style={{ display: randomWordButtonIsActive ? 'flex' : 'none' }}>
          <div className='hangman'>
            <span className={life <= 0 ? 'ten' : null}>{jambe_droite}</span>
            <span className={life <= 1 ? 'nine' : null}>{jambe_gauche}</span>
            <span className={life <= 2 ? 'eight' : null}>{bras_droit}</span>
            <span className={life <= 3 ? 'seven' : null}>{bras_gauche}</span>
            <span className={life <= 4 ? 'six' : null}>
              <img src={body} />
            </span>
            <span className={life <= 5 ? 'five' : null}>
              <img src={face} />
            </span>
            <span className={life <= 6 ? 'four' : null}>
              <img src={rond} />
            </span>
            <span className={life <= 7 ? 'three' : null}>
              <img src={corde} />
            </span>
            <span className={life <= 8 ? 'two' : null}>
              <img src={rectangle} />
            </span>
            <img className={life <= 9 ? 'one' : null} src={structure} />
          </div>
          <div className='lifeContainer'>
            <h1 className='life'>{life}</h1>
          </div>
        </section>
        <section className='letterContainer'>
          {word && (
            <div className='randomWord'>
              {/* <p>Selected Word: {word}</p> */}
              {word.split('').map((letter, index) => (
                <span key={index} className='dash'>
                  {guessedLetters.includes(letter) || life === 0 ? letter : '_'}
                </span>
              ))}
            </div>
          )}
          <div className='allLetters'>
            {letters.map((letter, id) => (
              <button
                style={{
                  pointerEvents: life === 0 || (guessedLetters.includes(letter) && 'none'),
                  color: guessedLetters.includes(letter) ? '#767676' : null,
                  borderColor: guessedLetters.includes(letter) ? '#767676' : null,
                }}
                onClick={() => {
                  handleClickLetter(letter);
                }}
                className='letters'
                key={id}
              >
                {letter}
              </button>
            ))}
          </div>
          <button className='randomWordButton' onClick={chooseRandomWord}>
            Choose Random Word
          </button>
        </section>
      </main>
    </>
  );
}

export default App;
