import React from 'react';
import List from './List.js';

class ListContainer extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
};

const App = () => (
  <div>
    <h1>Welcome</h1>
    <ListContainer>
      <List />
    </ListContainer>
  </div>
);

export default App;
