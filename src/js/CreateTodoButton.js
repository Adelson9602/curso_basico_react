import React from 'react';
import '../css/CreateTodoButton.css';

function CreateTodoButton(props) {
  const clickBtn = () => {
    alert('Hola')
  }
  return (
    <button
      className="CreateTodoButton"
      onClick ={clickBtn}
    >
      +
    </button>
  );
}

export { CreateTodoButton };
