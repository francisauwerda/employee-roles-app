import React from 'react';
import List from './List.js';
import ListContainer from './ListContainer';

const App = () => (
  <div>
    <h1>Welcome</h1>
    <ListContainer>
      <List />
    </ListContainer>
  </div>
);

export default App;
