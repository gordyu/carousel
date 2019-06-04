
import React from 'react';
import Carousel from './Carousel.jsx';

const Modal = () => (
  <div>
    <div className="container">
      <div className="interior">

        <div className="wrapper">
          <div className="box a"><a className="btn" href="#open-modal"><img src="https://s3-us-west-1.amazonaws.com/propimage55/0.webp" height="434" width="748"></img></a></div>
          <div className="box b">
            <div className="box c"><a className="btn" href="#open-modal"><img src="https://s3-us-west-1.amazonaws.com/propimage55/1.webp" height="215" width="380"></img></a></div>
            <div className="box d"><a className="btn" href="#open-modal"><img src="https://s3-us-west-1.amazonaws.com/propimage55/19.webp" height="215" width="380"></img></a></div>
            <div className="box e"><a className="btn" href="#open-modal"><img src="https://s3-us-west-1.amazonaws.com/propimage55/30.webp" height="215" width="380"></img></a></div>
            <div className="box f"><a className="btn" href="#open-modal"><img src="https://s3-us-west-1.amazonaws.com/propimage55/7.webp" height="215" width="380"></img></a></div>
          </div>
        </div>

      </div>
    </div>

    <div id="open-modal" className="modal-window">
      <div>
        <a href="#" title="Close" className="modal-close">&times;</a>
        <Carousel />
      </div>
    </div>

  </div>
)

export default Modal;