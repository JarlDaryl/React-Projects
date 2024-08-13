import React from 'react';

import Todos from './components/Todos';
import Todo from './models/todo';

function App() {
  const todos = 
    [new Todo('Learn TypeScript'),
    new Todo ('Improve React')]
  
  return (
    <div >
      <Todos items={todos}/>
    </div>
  );
}

export default App;
