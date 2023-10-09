import { useEffect, useRef, useState } from 'react';
import './App.css';
import FrenchApi from './components/frenchApiWord/FrenchApi';
import EnglishApi from './components/englishApiWord/EnglishApiWord';
import axios from 'axios';
// import NavBar from './components/navBar/NavBar';
import HomePage from './components/homePage/HomePage';

function App() {
  const [isHomePage, setIsHomePage] = useState(true);
  const [frenchWord, setFrenchWord] = useState(false);
  const [englishWord, setEnglishWord] = useState(false);

  const frenchWords = () => {
    setFrenchWord(true);
    setIsHomePage(false);
  };
  const englishWords = () => {
    setEnglishWord(true);
    setIsHomePage(false);
  };

  return (
    <>
      {isHomePage ? (
        <HomePage frenchWords={frenchWords} englishWords={englishWords} />
      ) : (
        <>
          {/* <NavBar /> */}
          {frenchWord ? <FrenchApi englishWord={englishWord} /> : null}
          {englishWord ? <EnglishApi englishWord={englishWord} /> : null}
        </>
      )}
    </>
  );
}

export default App;
