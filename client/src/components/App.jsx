
import React from 'react';
import Carousel from './Carousel.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Carousel />
      </div>
    );
  }
}

export default App;
