import { useEffect, useRef, useState } from 'react';
import '../../App.css';
import structure from '../../assets/Union.png';
import rectangle from '../../assets/Rectangle5.png';
import corde from '../../assets/Rope.png';
import rond from '../../assets/Exclude.png';
import face from '../../assets/Face.png';
import body from '../../assets/Body.png';
import bras_gauche from '../../assets/Arm_left.png';
import bras_droit from '../../assets/Arm_right.png';
import jambe_gauche from '../../assets/Leg_left.png';
import jambe_droite from '../../assets/Leg_right.png';
import axios from 'axios';
import { FaHeart, FaHeartBroken } from 'react-icons/fa';
import EndGame from '../endGame/EndGame';
import OverGame from '../endGame/OverGame';
import '../frenchApiWord/GameStyle.css';

function EnglishApiWord({ englishWord, text, click }) {
  const [randomWord, setRandomWord] = useState([]);

  const [wordLength, setWordLength] = useState(0);
  const [word, setWord] = useState('');
  const [mot, setMot] = useState('');
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [life, setLife] = useState(10);
  const [randomWordButtonIsActive, setRandomWordButtonIsActive] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [gameWin, setGameWin] = useState(false);
  const [correctLetter, setCorrectLetter] = useState([]);

  const callApiWord = async () => {
    const url = 'https://random-word-api.vercel.app/api?words=3';
    try {
      const response = await axios.get(url);
      setRandomWord(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleClickLetter = (letter) => {
    if (!guessedLetters.includes(letter)) {
      setGuessedLetters([...guessedLetters, letter]);
      if (!word.includes(letter)) {
        setLife((prevLife) => prevLife - 1);
      }
    }
  };
  const chooseRandomWord = () => {
    if (randomWord && randomWord.length > 0) {
      const randomIndex = Math.floor(Math.random() * randomWord.length);
      const randomWord2 = randomWord[randomIndex];
      setWord(randomWord2);
      setWordLength(randomWord2);
      setGuessedLetters([]);
      setCorrectLetter([...word]);
      setLife(10);
      setRandomWordButtonIsActive(true);
    }
  };
  useEffect(() => {
    callApiWord();
  }, []);

  useEffect(() => {
    if (randomWord && randomWord.length > 0) {
      chooseRandomWord();
    }
  }, [randomWord]);
  const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  const newGame = () => {
    chooseRandomWord();
    callApiWord();
  };
  useEffect(() => {
    if (life === 0) {
      setGameWin(false);
    }
  }, [life]);

  useEffect(() => {
    if (word) {
      const wordLetters = word.split('');
      const isWordGuessed = wordLetters.every((letter) => guessedLetters.includes(letter));

      setGameWin(isWordGuessed && life > 0);
    }
  }, [guessedLetters, life, word]);

  return (
    <>
      {gameWin && life > 0 ? (
        <EndGame
          gameWin={gameWin}
          life={life}
          text={englishWord ? 'Retry' : 'Réessayer'}
          click={newGame}
          word={word}
          titleEndGame={'You Win'}
          guessedLetters={guessedLetters}
          englishWord={englishWord}
        />
      ) : null}
      {!gameWin && life === 0 ? <OverGame englishWord={englishWord} text={englishWord ? 'Retry' : 'Réessayer'} click={newGame} word={word} /> : null}

      <main className='containerMain'>
        <section className='hangmanContainerr'>
          <div className='hangmann'>
            {life <= 0 ? <img className='ten' src={jambe_droite} /> : null}

            {life <= 1 ? <img className='nine' src={jambe_gauche} /> : null}

            {life <= 2 ? <img className='eight' src={bras_droit} /> : null}

            {life <= 3 ? <img className='seven' src={bras_gauche} /> : null}

            {life <= 4 ? <img className='six' src={body} /> : null}

            {life <= 5 ? <img className='five' src={face} /> : null}
            {life <= 6 ? <img className='four' src={rond} /> : null}
            {life <= 7 ? <img className='three' src={corde} /> : null}

            {life <= 8 ? <img className='two' src={rectangle} /> : null}

            {life <= 9 ? <img className='one' src={structure} /> : null}
          </div>
          <div className='lifeContainer'>
            <div style={{ visibility: randomWordButtonIsActive && 'visible' }} className='life'>
              {Array.from({ length: 10 }, (_, index) => (
                <span key={index} className='heart'>
                  {index < life ? <FaHeart /> : <FaHeartBroken />}
                </span>
              ))}
            </div>
          </div>
        </section>
        <section className='letterContainerr'>
          <div className='randomWordd' style={{ visibility: word && 'visible' }}>
            {/* <p>Selected Word: {word}</p> */}
            {word.length >= 1 &&
              word.split('').map((letter, index) => (
                <span key={index} className='dash'>
                  {guessedLetters.includes(letter) || life === 0 ? letter : '_'}
                </span>
              ))}
          </div>
          <div className='allLetterss'>
            {letters.map((letter, id) => (
              <button
                style={{
                  pointerEvents:
                    life === 0 ||
                    guessedLetters.includes(letter) ||
                    [...word].every((char) => guessedLetters.includes(char)) ||
                    !randomWordButtonIsActive
                      ? 'none'
                      : 'auto',
                  color: guessedLetters.includes(letter) || !randomWordButtonIsActive ? '#767676' : null,
                  borderColor: guessedLetters.includes(letter) ? '#767676' : null,
                  background: guessedLetters.includes(letter) && word.includes(letter) ? '#ffbe01' : null,
                }}
                onClick={() => {
                  handleClickLetter(letter);
                }}
                className='letters'
                key={id}
              >
                {letter}
                <span
                  style={{
                    display:
                      life === 0 || (guessedLetters.includes(letter) && !word.includes(letter)) || !randomWordButtonIsActive ? 'block' : 'none',
                  }}
                  className='croix'
                ></span>
              </button>
            ))}
          </div>
          {/* <button className='randomWordButtonn' onClick={chooseRandomWord}>
            Choose Random Word
          </button> */}
        </section>
      </main>
      {/* <FrenchApi /> */}
    </>
  );
}

export default EnglishApiWord;
