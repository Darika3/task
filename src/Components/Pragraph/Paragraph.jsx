import React, { useState } from "react";

const Paragraph = (props) => {
  const [task, setTask] = useState("");
  const changeInput = (e) => {
    setTask(e.target.value);
    console.log(e.target.value);
  };
  const handleAdd = (e) => {
    // Проверка на заполненость инпута
    if (!task) {
      alert("input is empty");
      return;
    }
    const newTask = {
      task: task,
      status: false,
      id: Date.now(),
    };
    // функция для добавления в массив todos, из которого будем отображать таски.
    props.handleTask(newTask);
    setTask("");
  };
  return (
    <div>
      <input onChange={changeInput} value={task} type="text" />
      <button onClick={handleAdd}>add</button>
      {props.todos.map((item) => (
        <h3 key={item.id}>{item.task}</h3>
      ))}
    </div>
  );
};

export default Paragraph;
