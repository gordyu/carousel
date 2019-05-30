
import React from 'react';
import Carousel from './Carousel.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="wrapper">
        <div className="box a"><img src="https://s3-us-west-1.amazonaws.com/propimage55/0.webp" height="435" width="750"></img></div>
        <div className="box b">
          <div className="box c"><img src="https://s3-us-west-1.amazonaws.com/propimage55/1.webp" height="213" width="380"></img></div>
          <div className="box d"><img src="https://s3-us-west-1.amazonaws.com/propimage55/2.webp" height="213" width="380"></img></div>
          <div className="box e"><img src="https://s3-us-west-1.amazonaws.com/propimage55/3.webp" height="213" width="380"></img></div>
          <div className="box f"><img src="https://s3-us-west-1.amazonaws.com/propimage55/4.webp" height="213" width="380"></img></div>
        </div>
      </div>
    );
  }
}

export default App;
