import React from 'react';
import ImageCard from './ImageCard';
import './ImageList.css';
const ImageList = ({ images }) => {
	const photos = images.map(image => {
		return <ImageCard key={image.id} image={image} />;
	});
	return <div className='image-list'>{photos}</div>;
};

export default ImageList;
