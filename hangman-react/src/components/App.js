import "../assets/css/App.css";
import { useEffect, useState } from "react";
import { Header } from "./Header";
import { GameStage } from "./GameStage";
import { CurrentWord } from "./CurrentWord";
import { Keyboard } from "./Keyboard";

function App() {
  const MAX_TRIALS = 6;
  const words = ["xenophobia", "bandy", "jiggles", "hello", "orange", "red", "book"];
  const [secretWordArray, setSecretWordArray] = useState([]);
  const [blanks, setBlanks] = useState([]);
  const [letterGuessed, setLetterGuessed] = useState("")
  const [trials, setTrials] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const [buttonsDisabled, setButtonsDisabled] = useState(false);
  const [hintUsed, setHintUsed] = useState(false);
  const [showNewWordButton, setShowNewWordButton] = useState(false);
  const [showHintButton, setShowHintButton] = useState(false);
  const [gameFinish, setGameFinish] = useState(false);
  const [gameResult, setGameResult] = useState("");

  const initializeGame = () => {
    const wordArray = (words[Math.floor(Math.random() * words.length)]).split("");
    const blanksArray = Array(wordArray.length).fill("_");

    setShowNewWordButton(false);
    setShowHintButton(false);
    setSecretWordArray(wordArray);
    setBlanks(blanksArray);
    setImageIndex(0);
    setTrials(MAX_TRIALS);
    setButtonsDisabled(false);    
    setHintUsed(false);
    setGameFinish(false);
    setGameResult("");
  };

  const guessAndUpdateBlanks = (letter) => {
    let isGoodGuess = false;
    const blanksArray = blanks;
  
    for (const [I, CHAR] of secretWordArray.entries()) {
      if (CHAR === letter) {
        isGoodGuess = true;
        blanksArray[I] = letter;
      }
    }

    setBlanks(blanksArray);

    return isGoodGuess;
  }

  const replaceGuessedLetters = (isGoodGuess, letter) => {
    if (isGoodGuess) {
      setLetterGuessed(letter);
    } else {
      const UPDATED_TRIALS = trials - 1;
      setTrials(UPDATED_TRIALS);
      setImageIndex(MAX_TRIALS - UPDATED_TRIALS);
    }
  }

  const play = (event) => {
    if (gameFinish) return;
        
    const BUTTON = event.target;
    const LETTER = BUTTON.getAttribute("data-value");
    const IS_GOOD_GUESS = guessAndUpdateBlanks(LETTER);

    replaceGuessedLetters(IS_GOOD_GUESS, LETTER);
    BUTTON.classList.add("disabled");

    if (((trials - 1) === 1) && !hintUsed) {
      setShowHintButton(true);
    }

    if (!blanks.includes("_")) {
      setGameFinish(true);
      setGameResult("win");
      setShowNewWordButton(true);
      setShowHintButton(false);
    }

    if (!(trials - 1)) {
      setGameFinish(true);
      setGameResult("lose");
      setShowNewWordButton(true);
      setShowHintButton(false);
    }
  }
  
  useEffect(() => {
    initializeGame();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Header />
      <GameStage image_index={ imageIndex } initialize_game={ initializeGame } show_new_word_button={ showNewWordButton } show_hint_button={ showHintButton }/>
      <CurrentWord blanks={ blanks } letter_guessed={ letterGuessed } game_result={ gameResult } />
      <Keyboard play={ play } buttons_disabled={ buttonsDisabled } />
    </>
  );
}

export default App;
