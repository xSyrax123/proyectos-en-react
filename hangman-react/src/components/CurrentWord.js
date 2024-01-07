export const CurrentWord = ({ blanks, letter_guessed, game_result }) => {
  return (
    <div className="current-word">
      {blanks.map((letter, index) => (
        <span
          key={index}
          className={
            letter === letter_guessed || game_result === "win"
              ? "correct"
              : game_result === "lose"
              ? "incorrect"
              : ""
          }
        >
          {letter}
        </span>
      ))}
    </div>
  );
};
