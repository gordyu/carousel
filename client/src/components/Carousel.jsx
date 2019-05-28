
import React from 'react';
import ImageSlide from './ImageSlide.jsx';
import Arrow from './Arrow.jsx';

const imgUrls = [
  'https://s3-us-west-1.amazonaws.com/propimage55/0.webp',
  'https://s3-us-west-1.amazonaws.com/propimage55/1.webp',
  'https://s3-us-west-1.amazonaws.com/propimage55/2.webp',
  'https://s3-us-west-1.amazonaws.com/propimage55/3.webp',
  'https://s3-us-west-1.amazonaws.com/propimage55/4.webp',
  'https://s3-us-west-1.amazonaws.com/propimage55/5.webp',
  'https://s3-us-west-1.amazonaws.com/propimage55/6.webp'
];

class Carousel extends React.Component {
	constructor (props) {
		super(props);
		
		this.state = {
			currentImageIndex: 0
		};
		
		this.nextSlide = this.nextSlide.bind(this);
		this.previousSlide = this.previousSlide.bind(this);
	}
	
	previousSlide () {
		const lastIndex = imgUrls.length - 1;
		const { currentImageIndex } = this.state;
		const shouldResetIndex = currentImageIndex === 0;
		const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;
		
		this.setState({
			currentImageIndex: index
		});
	}
	
	nextSlide () {
		const lastIndex = imgUrls.length - 1;
		const { currentImageIndex } = this.state;
		const shouldResetIndex = currentImageIndex === lastIndex;
		const index =  shouldResetIndex ? 0 : currentImageIndex + 1;

		this.setState({
			currentImageIndex: index
		});
	}
	
	render () {
		return (
			<div className="carousel">
				<Arrow direction="left" clickFunction={ this.previousSlide } glyph="&#9664;" />
				<ImageSlide url={ imgUrls[this.state.currentImageIndex] } />
				<Arrow direction="right" clickFunction={ this.nextSlide } glyph="&#9654;" />
			</div>
		);
	}
}

export default Carousel;
