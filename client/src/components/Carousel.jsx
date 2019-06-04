
import React from 'react';
import ImageSlide from './ImageSlide.jsx';
import Arrow from './Arrow.jsx';
import Description from './Desc.jsx';
import $ from 'jquery';

const imgUrls = [];
const imgDesc = [];

class Carousel extends React.Component {
	constructor (props) {
		super(props);
		
		this.state = {
			homes: [],
			currentImageIndex: 0
		};
		
		this.nextSlide = this.nextSlide.bind(this);
		this.previousSlide = this.previousSlide.bind(this);
	}
	
	componentDidMount() {
		$.ajax({
			url: 'http://localhost:3004/homes',
			method: 'GET',
			success: data => {
				for (var i = 0; i < data.length; i++) {
					imgUrls.push(data[i].imageURL);
					imgDesc.push(data[i].description);
				}
			}
		});
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
				<Description desc={ imgDesc[this.state.currentImageIndex] } />
				<Arrow direction="right" clickFunction={ this.nextSlide } glyph="&#9654;" />
			</div>
		);
	}
}

export default Carousel;
