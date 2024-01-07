export const GameStage = ({ image_index, initialize_game, show_new_word_button, show_hint_button }) => {
  return (
    <div className="game-stage">
      <button type="button" className={`btn hint-button ${show_hint_button ? "visible": "hidden"}`}>
        Hint?
      </button>
      <img
        alt="hangman"
        src={require(`../assets/img/${image_index}.png`)}
      />
      <button
        type="button"
        className={`btn new-word-button ${show_new_word_button ? "visible": "hidden"}`}
        onClick={initialize_game}
      >
        New Word
      </button>
    </div>
  );
};
