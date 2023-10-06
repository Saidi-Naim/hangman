import { useEffect, useRef, useState } from 'react';
import './App.css';
import FrenchApi from './components/frenchApiWord/FrenchApi';
import EnglishApi from './components/englishApiWord/EnglishApiWord';
import axios from 'axios';
// import NavBar from './components/navBar/NavBar';
import HomePage from './components/homePage/HomePage';

function App() {
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
      {/* <NavBar /> */}
      <HomePage frenchWord={frenchWord} englishWord={englishWord} frenchWords={frenchWords} englishWords={englishWords} />
    </>
  );
}

export default App;
