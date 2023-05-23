import React from 'react';
import UserList from './components/UserList/UserList';
import TodoList from './components/TodoList/TodoList';

function App() {
  return (
    <div className="App">
      <TodoList />
      <UserList />
    </div>
  );
}

export default App;
