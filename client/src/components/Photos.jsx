
import React from 'react';
import arrowRight from './image_location';
import arrowLeft from './image_location';

export class Photos extends React.Component {
  constructor() {
    super();

    this.state = {
      currentImageIndex: 0,
      // Will need to determine if I'll use S3 or load images here
      image: [], 
      arrowNext: arrowRight,
      arrowPrev: arrowLeft
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
        {/* This is the left arrow */}
        <img src={this.state.arrowPrev} onClick={this.prevSlide} />

        {firstFiveVideo.map((image, index) => {
          <img key={index} src={image} alt="" />
        })}

        {/* this is the right arrow */}
        <img src={this.state.arrowNext} onClick={this.nextSlide} />
      </div>
    )
  }
}
