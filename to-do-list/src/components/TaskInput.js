import { useState } from "react";

export const TaskInput = ({ addTask }) => {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleAddTask = () => {
    addTask(inputText);
    setInputText('');
  };

  return (
    <section className="card-composer">
      <textarea
        placeholder="Enter a title for this card..."
        value={ inputText }
        onChange={ handleInputChange }
      ></textarea>
      <button onClick={ handleAddTask } className="add">
        Add card
      </button>
    </section>
  );
};
