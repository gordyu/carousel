
import React from 'react';

const ImageSlide = ({ url }) => {

	const styles = {
		backgroundImage: `url(${url})`,
		backgroundSize: 'auto',
		backgroundPosition: 'center center',
		backgroundRepeat: 'no-repeat'
	};
	
	return (
		<div className="image-slide" style={styles}></div>
	);
}

export default ImageSlide;
