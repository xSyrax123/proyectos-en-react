import "../assets/css/App.css";
import { useEffect, useState } from "react";
import { Header } from "./Header";
import { GameStage } from "./GameStage";
import { CurrentWord } from "./CurrentWord";
import { Keyboard } from "./Keyboard";

function App() {
  const MAX_TRIALS = 6;
  const words = ["xenophobia", "bandy", "jiggles", "hello", "orange", "red", "book"];
  const [buttons, setButtons] = useState([
    { letter: 'A', disabled: false },
    { letter: 'B', disabled: false },
    { letter: 'C', disabled: false },
    { letter: 'D', disabled: false },
    { letter: 'E', disabled: false },
    { letter: 'F', disabled: false },
    { letter: 'G', disabled: false },
    { letter: 'H', disabled: false },
    { letter: 'I', disabled: false },
    { letter: 'J', disabled: false },
    { letter: 'K', disabled: false },
    { letter: 'L', disabled: false },
    { letter: 'M', disabled: false },
    { letter: 'N', disabled: false },
    { letter: 'O', disabled: false },
    { letter: 'P', disabled: false },
    { letter: 'Q', disabled: false },
    { letter: 'R', disabled: false },
    { letter: 'S', disabled: false },
    { letter: 'T', disabled: false },
    { letter: 'U', disabled: false },
    { letter: 'V', disabled: false },
    { letter: 'W', disabled: false },
    { letter: 'X', disabled: false },
    { letter: 'Y', disabled: false },
    { letter: 'Z', disabled: false }
  ])
  const [secretWordArray, setSecretWordArray] = useState([]);
  const [blanks, setBlanks] = useState([]);
  const [letterGuessed, setLetterGuessed] = useState("")
  const [trials, setTrials] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const [hintUsed, setHintUsed] = useState(false);
  const [showNewWordButton, setShowNewWordButton] = useState(false);
  const [showHintButton, setShowHintButton] = useState(false);
  const [gameFinish, setGameFinish] = useState(false);
  const [gameResult, setGameResult] = useState("");

  const initializeGame = () => {
    const wordArray = (words[Math.floor(Math.random() * words.length)]).split("");
    const blanksArray = Array(wordArray.length).fill("_");

    setButtons((prev) =>
      prev.map((el) => ({ ...el, disabled: false }))
    );
    setShowNewWordButton(false);
    setShowHintButton(false);
    setSecretWordArray(wordArray);
    setBlanks(blanksArray);
    setImageIndex(0);
    setTrials(MAX_TRIALS);   
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
  };

  const replaceGuessedLetters = (isGoodGuess, letter, updated_trials) => {
    if (isGoodGuess) {
      setLetterGuessed(letter);
    } else {
      setTrials(updated_trials);
      setImageIndex(MAX_TRIALS - updated_trials);
    }
  };

  const hint = () => {
    setShowHintButton(false);
    setHintUsed(true);

    const MAX_LETTERS_TO_SHOW = Math.floor(Math.random() * 6) + 1;
    const INDEXES = [];
  
    while (INDEXES.length < MAX_LETTERS_TO_SHOW) {
      const RANDOM_INDEX = Math.floor(Math.random() * buttons.length);
      const BUTTON = buttons[RANDOM_INDEX];
      const LETTER = BUTTON.letter.toLowerCase();
  
      if (
        !INDEXES.includes(RANDOM_INDEX) &&
        !BUTTON.disabled &&
        !secretWordArray.includes(LETTER)
      ) {
        console.log(!BUTTON.disabled)
        setButtons((prevButtons) =>
          prevButtons.map((btn) =>
            btn.letter === LETTER.toUpperCase() ? { ...btn, disabled: true } : btn
          )
        );

        INDEXES.push(RANDOM_INDEX);
      }
    }
  };

  const play = (letter) => {
    if (gameFinish) return;

    const LETTER = letter.toLowerCase();        
    const IS_GOOD_GUESS = guessAndUpdateBlanks(LETTER);
    const UPDATED_TRIALS = IS_GOOD_GUESS ? trials : trials - 1;

    replaceGuessedLetters(IS_GOOD_GUESS, LETTER, UPDATED_TRIALS);

    if ((UPDATED_TRIALS === 1) && !hintUsed) {
      setShowHintButton(true);
    }

    if (!blanks.includes("_")) {
      setGameFinish(true);
      setGameResult("win");
      setShowNewWordButton(true);
      setShowHintButton(false);
    }

    if (!(UPDATED_TRIALS)) {
      const BLANKS = secretWordArray;
      setLetterGuessed("");
      setBlanks(BLANKS);
      setGameFinish(true);
      setGameResult("lose");
      setShowNewWordButton(true);
      setShowHintButton(false);
    }
  };
  
  useEffect(() => {
    initializeGame();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Header />
      <GameStage image_index={ imageIndex } initialize_game={ initializeGame } show_new_word_button={ showNewWordButton } show_hint_button={ showHintButton } hint={ hint }/>
      <CurrentWord blanks={ blanks } letter_guessed={ letterGuessed } game_result={ gameResult } />
      <Keyboard play={ play } buttons={ buttons } set_buttons={ setButtons } game_finish={ gameFinish } />
    </>
  );
}

export default App;
