import React from 'react';
import Tilt from 'react-tilt';
import chuck from './chuck.JPG';
import './Logo.css';


const Logo = () => {
	return (
		<div className='ma4 mt0'>
			<Tilt className="Tilt" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
 			<div className="Tilt-inner" pa3>
 				<img style={{paddingTop: '5px'}} alt='logo' src={chuck} width='50%'/>
 			</div>
			</Tilt>
		</div>
	);
}

export default Logo;