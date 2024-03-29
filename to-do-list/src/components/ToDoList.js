import { useState } from "react";
import { TaskInput } from "./TaskInput";
import { TaskList } from "./TaskList";

export const ToDoList = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskText) => {
    if (taskText !== "") {
      setTasks((prevTasks) => [
        ...prevTasks,
        { text: taskText, completed: false },
      ]);
    } else {
      alert("You can't add an empty task.");
    }
  };

  const completeTask = (index) => {
    setTasks((prevTasks) => prevTasks.map((el, i) => {
      if (index === i) {
        return { ...el, completed: !el.completed };
      }
      return el;
    }));
  };

  const removeTask = (event, index) => {
    event.stopPropagation();
    
    setTasks((prevTasks) => {
      const UPDATED_TASKS = [...prevTasks];
      UPDATED_TASKS.splice(index, 1);
      return UPDATED_TASKS;
    });
  };

  return (
    <>
      <TaskInput addTask={ addTask } />
      <TaskList
        tasks={ tasks }
        completeTask={ completeTask }
        removeTask={ removeTask }
      />
    </>
  );
};
