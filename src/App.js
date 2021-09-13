import React from 'react';
import { TodoCounter } from './js/TodoCounter';
import { TodoSearch } from './js/TodoSearch';
import { TodoList } from './js/TodoList';
import { TodoItem } from './js/TodoItem';
import { CreateTodoButton } from './js/CreateTodoButton';
// import './App.css';

const todos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el cursso de intro a React', completed: false },
  { text: 'Llorar con la llorona', completed: false },
  { text: 'LALALALAA', completed: false },
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {todos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
