import React, { Component } from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
	return (
		<div >
			<p className='white f3'>
				{'This Magic Brain will detect faces in your pictures.'}
			</p>
			<p1 className='white f4'>
				{'Fill in the url of image with face and click detect button.'}
			</p1> 
			<div className='center'>
				<div className='form center pa4 br3 shadow-5'>
					<input className='f4 pa2 w-70 center' type='tex' onChange={onInputChange} />
					<button 
						className='w-30 grow f4 link ph3 pv3 dib white bg-dark-blue'
						onClick={onButtonSubmit}
					>Detect</button>
				</div>
			</div>
		</div>
	);
}

export default ImageLinkForm;