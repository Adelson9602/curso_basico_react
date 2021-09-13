import React from 'react';
import '../css/TodoSearch.css';

function TodoSearch() {
  const onSearch = (evt) => {
    console.log('Buscando', evt.target.value)
  }
  return (
    <input
      className="TodoSearch"
      placeholder="Programar login"
      onChange={onSearch}
    />
  );
}

export { TodoSearch };
