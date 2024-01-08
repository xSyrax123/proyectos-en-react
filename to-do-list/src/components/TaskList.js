export const TaskList = ({ tasks, completeTask, removeTask }) => {
  return (
    <ol className="task_list">
      {tasks.map((task, index) => (
        <li
          key={index}
          onClick={() => completeTask(index)}
          className={task.completed ? "complete_task" : ""}
        >
          {task.text}
          <button className="close" onClick={(event) => removeTask(event, index)}>
            &times;
          </button>
        </li>
      ))}
    </ol>
  );
};
