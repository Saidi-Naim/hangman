import { useEffect, useRef, useState } from 'react';
// import './App.css';
import axios from 'axios';
import FrenchApi from './components/frenchApiWord/FrenchApi';
import EnglishApi from './components/englishApiWord/EnglishApiWord';

function App() {
  // const randomWord = ['pomme', 'tokyo', 'banane', 'vent', 'soleil', 'celsius', 'sentiment', 'face', 'vogue'];
  const [frenchWord, setFrenchWord] = useState(false);
  const [englishWord, setEnglishWord] = useState(false);
  const frenchWords = () => {
    setFrenchWord(true);
  };
  const englishWords = () => {
    setEnglishWord(true);
  };
  return (
    <>
      <button onClick={frenchWords}>French</button>
      {frenchWord ? <FrenchApi /> : null}
      <button onClick={englishWords}>English</button>
      {englishWord ? <EnglishApi /> : null}
    </>
  );
}

export default App;
