import { useEffect, useRef, useState } from 'react';
import './App.css';
import FrenchApi from './components/frenchApiWord/FrenchApi';
import EnglishApi from './components/englishApiWord/EnglishApiWord';
import axios from 'axios';
import NavBar from './components/navBar/NavBar';

function App() {
  const [frenchWord, setFrenchWord] = useState(false);
  const [englishWord, setEnglishWord] = useState(false);
  const [datePicker, setDatePicker] = useState('');
  const [userName, setUserName] = useState('naim');

  const frenchWords = () => {
    setFrenchWord(true);
  };
  const englishWords = () => {
    setEnglishWord(true);
  };

  const getDate = () => {
    const datePick = document.getElementById('datePicker');

    setDatePicker(datePick.value);

    console.log(datePicker);
    try {
      axios.post('http://localhost:5200/', {
        date: datePicker,
        name: userName,
      });
    } catch (error) {
      console.log("l'erreur du post" + error);
    }
  };

  return (
    <>
      <NavBar />
      <div className='containerButtonLanguage'>
        <button style={{ display: frenchWord || englishWord ? 'none' : 'block' }} className='buttonLanguage' onClick={frenchWords}>
          Français
        </button>
        {frenchWord ? <FrenchApi /> : null}
        <button style={{ display: frenchWord || englishWord ? 'none' : 'block' }} className='buttonLanguage' onClick={englishWords}>
          English
        </button>
        {englishWord ? <EnglishApi /> : null}
      </div>
    </>
  );
}

export default App;
