export const Button = ({ buttonText, handleClick }) => {
  return (
    <button className="btn" onClick={() => handleClick(buttonText)}>
      {buttonText}
    </button>
  );
};
