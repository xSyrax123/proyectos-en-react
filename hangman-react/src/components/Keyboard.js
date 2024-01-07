export const Keyboard = ({ play, buttons, set_buttons, game_finish }) => {
  const handleClick = (letter) => {
    if (!game_finish) {
      set_buttons((prev) => {
        return prev.map((el) => {
          if (el.letter === letter) return { ...el, disabled: true };
          return el;
        });
      });
      
      play(letter);
    }
  };

  return (
    <div className="keyboard">
      <div className="keys">
        {buttons.map(({ letter, disabled }) => (
          <button
            className={`btn ${disabled ? "disabled" : ""}`}
            key={letter}
            onClick={() => handleClick(letter)}
          >
            {letter}
          </button>
        ))}
      </div>
    </div>
  );
};
