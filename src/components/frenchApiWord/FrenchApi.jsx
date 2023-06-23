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

function FrenchApi() {
  const [randomWord, setRandomWord] = useState('');
  const [wordLength, setWordLength] = useState(0);
  const [word, setWord] = useState('');
  const [mot, setMot] = useState('');
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [life, setLife] = useState(10);
  const [randomWordButtonIsActive, setRandomWordButtonIsActive] = useState(false);

  const callApiWord = async () => {
    const requestOptions = {
      method: 'GET',
      url: 'https://quotes15.p.rapidapi.com/quotes/random/',
      params: {
        language_code: 'fr',
      },
      headers: {
        'X-RapidAPI-Key': 'e8e9de6c84msh1af82a5739cdf3ap1ee09bjsna5ed657c3e5d',
        'X-RapidAPI-Host': 'quotes15.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(requestOptions);
      const words = response.data.content.split(' ').filter((word) => word.length >= 4);
      const randomIndex = Math.floor(Math.random() * words.length);
      const randomWord = words[randomIndex];
      setRandomWord(randomWord);
    } catch (error) {
      console.error(error);
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
    if (randomWord && randomWord.length >= 4) {
      const words = randomWord.split(' ');
      const filteredWords = words.filter((word) => word.length >= 4);
      const randomIndex = Math.floor(Math.random() * filteredWords.length);
      const randomWord2 = filteredWords[randomIndex];
      setWord(randomWord2);
      setWordLength(randomWord2.length);
      setGuessedLetters([]);
      setLife(10);
      setRandomWordButtonIsActive(true);
    }
  };

  useEffect(() => {
    callApiWord();
  }, []);

  const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  const [gameOver, setGameOver] = useState(life === 0 ? true : false);
  //   console.log(word);

  return (
    <>
      <main className='container'>
        <section className='hangmanContainer'>
          <div className='hangman'>
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
              {life}
            </div>
          </div>
        </section>
        <section className='letterContainer'>
          <div className='randomWord' style={{ visibility: word && 'visible' }}>
            {/* <p>Selected Word: {word}</p> */}
            {word.length >= 1 &&
              [...word].map((letter, index) => (
                <span key={index} className='dash'>
                  {guessedLetters.includes(letter) || life === 0 ? letter : '_'}
                </span>
              ))}
          </div>
          <div className='allLetters'>
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
          <button className='randomWordButton' onClick={chooseRandomWord}>
            Choose Random Word
          </button>
        </section>
      </main>
    </>
  );
}

export default FrenchApi;
