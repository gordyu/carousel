
import React from 'react';
import left from '../images/left.png';
import right from '../images/right.png';

class Photos extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentImageIndex: 0,
      images: [
        'https://s3-us-west-1.amazonaws.com/propimage55/1.webp',
        'https://s3-us-west-1.amazonaws.com/propimage55/2.webp',
        'https://s3-us-west-1.amazonaws.com/propimage55/3.webp',
        'https://s3-us-west-1.amazonaws.com/propimage55/4.webp',
        'https://s3-us-west-1.amazonaws.com/propimage55/5.webp',
        'https://s3-us-west-1.amazonaws.com/propimage55/6.webp',
      ]
    }

    this.nextSlide = this.nextSlide.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
  }

  prevSlide() {
    const lastIndex = this.state.images.length - 1;
    const resetIndex = this.state.currentImageIndex === 0;
    const index = resetIndex ? lastIndex : this.state.currentImageIndex - 1;

    this.setState({
      currentImageIndex: index
    });
  }

  nextSlide() {
    const lastIndex = this.state.images.length - 1;
    const resetIndex = this.state.currentImageIndex === lastIndex;
    const index = resetIndex ? 0 : this.state.currentImageIndex + 1;

    this.setState({
      currentImageIndex: index
    });
  }

  render() {

    const index = this.state.currentImageIndex;
    let firstFiveVideo = this.state.images.slice(index, index + 5);
    
    if (firstFiveVideo.length < 5) {
      firstFiveVideo = firstFiveVideo.concat(this.state.images.slice(0, 5 - firstFiveVideo.length));
    }
    
    return (
      <div>
        <img className="leftArrow" src={left} onClick={this.prevSlide} />

        {firstFiveVideo.map((image, index) => {
          return <img className="pictures" key={index} src={image} alt="" />
        })}

        <img className="rightArrow" src={right} onClick={this.nextSlide} />
      </div>
    )
  }
}

export default Photos;
