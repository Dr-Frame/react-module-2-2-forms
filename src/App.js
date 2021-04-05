import React, { Component } from 'react';
import shortid from 'shortid';
import Counter from './components/Counter';
import Dropdown from './components/Dropdown';
import ColorPicker from './components/ColorPicker';
import TodoList from './components/TodoList';
import Filter from './components/Filter/Filter';
import TodoEditor from './components/TodoEditor/';
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
    filter: '',
  };

  addTodo = text => {
    console.log(text);

    const todo = {
      id: shortid.generate(),
      //аналогичная записи text: text
      text,
      completed: false,
    };

    this.setState(({ todos }) => ({
      todos: [todo, ...todos],
    }));
  };

  deleteTodo = todoID => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoID),
    }));
  };

  toggleCompleted = todoID => {
    console.log(todoID);

    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
        if (todo.id === todoID) {
          console.log('found needed todo');
          return {
            ...todo,
            completed: !todo.completed,
          };
        }

        return todo;
      }),
    }));
  };

  formSubmitHandler = data => {
    console.log(data);
  };

  changeFilter = e => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };

  getVisibleTodos = () => {
    const { todos, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter),
    );
  };

  getCompletedTodoCount = () => {
    return this.state.todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc),
      0,
    );
  };

  render() {
    const { todos, filter } = this.state;

    const completedTodo = this.getCompletedTodoCount();

    const visibleTodos = this.getVisibleTodos();

    return (
      <React.Fragment>
        <Form submit={this.formSubmitHandler} />

        <Counter initialValue={15} />
        <Dropdown />
        <ColorPicker options={colorPickerOptions} />
        <div>
          <p>Общее кол-во: {todos.length}</p>
          <p>Количество выполненых: {completedTodo}</p>
        </div>
        <TodoEditor addTodo={this.addTodo} />
        <Filter filter={filter} changeFilter={this.changeFilter} />
        <TodoList
          todos={visibleTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />
      </React.Fragment>
    );
  }
}

export default App;
