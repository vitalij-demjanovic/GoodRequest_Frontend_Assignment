import React from 'react';
import './button.css'

const Button = (props) => {

	return (
		<button className='btn' onClick={props.next}>
			{props.name}
		</button>
	);
};

export default Button;