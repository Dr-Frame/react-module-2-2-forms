import React from 'react';
import './TodoList.scss';

const TodoList = ({ todos, onDeleteTodo }) => (
  <ul className="TodoList">
    {todos.map(({ id, text }) => {
      return (
        <li key={id} className="TodoList__item">
          <p className="TodoList__text">{text}</p>
          <button onClick={() => onDeleteTodo(id)}>Delete</button>
        </li>
      );
    })}
  </ul>
);

export default TodoList;
