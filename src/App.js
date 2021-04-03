import React, { Component } from 'react';
/* import Counter from './components/Counter';
import Dropdown from './components/Dropdown'; */
import ColorPicker from './components/ColorPicker';
import TodoList from './components/TodoList';
import initialTodos from './todos.json';
import Form from './components/Form';

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

class App extends Component {
  state = {
    todos: initialTodos,
  };

  deleteTodo = todoID => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoID),
    }));
  };

  formSubmitHandler = data => {
    console.log(data);
  };
  render() {
    /* const { todos } = this.state;

    const completedTodo = todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc),
      0,
    ); */

    return (
      <React.Fragment>
        <Form submit={this.formSubmitHandler} />

        {/* <Counter initialValue={15} />
        <Dropdown /> */}
        <ColorPicker options={colorPickerOptions} />
        {/* <div>
          <p>Общее кол-во: {todos.length}</p>
          <p>Количество выполненых: {completedTodo}</p>
        </div>

        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} /> */}
      </React.Fragment>
    );
  }
}

export default App;
