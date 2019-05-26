
import React from 'react';
import Photos from './Photos.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Photos />
      </div>
    );
  }
}

export default App;

/*
    return (
      <div>
        <div className="leftDiv">
          <img src="https://s3-us-west-1.amazonaws.com/propimage55/0.webp" width="50%"></img>

          <div className="rightDiv">
            <div>
              <img src="https://s3-us-west-1.amazonaws.com/propimage55/1.webp" height="20%" width="20%"></img>
              <img src="https://s3-us-west-1.amazonaws.com/propimage55/3.webp" height="20%" width="20%"></img>
            </div>
            <div>
              <img src="https://s3-us-west-1.amazonaws.com/propimage55/1.webp" height="20%" width="20%"></img>
              <img src="https://s3-us-west-1.amazonaws.com/propimage55/3.webp" height="20%" width="20%"></img>
            </div>
          </div>
          
        </div>
      </div>
    );
*/