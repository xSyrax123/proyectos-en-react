import '../assets/css/App.css';
import { useEffect, useState } from 'react'
import { Header } from './Header';
import { GameStage } from './GameStage';
import { CurrentWord } from './CurrentWord';
import { Keyboard } from './Keyboard';

function App() {
  const [words, setWords] = useState([]);

  useEffect(() => {
    fetch('../assets/words.txt')
      .then((response) => response.text())
      .then((data) => setWords(data.split(' ')))
      .catch((error) => console.error(`Error al leer el archivo de palabras: ${error}`));
  }, []);
  console.log(words)

  return (
    <>
      <Header />
      <GameStage />
      <CurrentWord />
      <Keyboard />
    </>
  );
}

export default App;
