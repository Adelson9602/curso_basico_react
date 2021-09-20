import React from 'react';
import '../css/TodoSearch.css';

function TodoSearch() {
  const [searcValue, setSearchValue] = React.useState('');

  const onSearch = (evt) => {
    setSearchValue(evt.target.value)
  }
  return ([
    <input
      className="TodoSearch"
      placeholder="Programar login"
      value={searcValue}
      onChange={onSearch}
    />,
    <p>{searcValue}</p>
  ]);
}

export { TodoSearch };
