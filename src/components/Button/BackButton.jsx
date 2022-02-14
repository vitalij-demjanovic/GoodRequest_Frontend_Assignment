import React from 'react';
import { connect } from 'react-redux';
import './button.css'

const BackButton = (props) => {
	return (
		<button className='back-btn' onClick={props.back}>
			Späť 
		</button>
	);
};

export default connect(
	(state) => ({
		currStep: state.form.currStep
	})
)(BackButton);