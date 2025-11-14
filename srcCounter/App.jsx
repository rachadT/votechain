// src/App.js
import React from 'react';
import Counter from './Counter';

const App = () => {
  return (
    <div className="App">
      <h1>Component with State + Event Handling</h1>
      <Counter startValue={4} />
    </div>
  );
}

export default App;
