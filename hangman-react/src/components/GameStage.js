export const GameStage = () => {
  return (
    <div className="game-stage">
      <button type="button" className="btn hint-button" id="hint-button">Hint?</button>
      <img id="hangman-image" alt="hangman" />
      <button type="button" className="btn new-word-button" id="new-word-button">New Word</button>
    </div>
  )
}
