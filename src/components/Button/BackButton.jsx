import React from 'react';
import classNames from 'classnames'
import styles from './button.css'
const cx = classNames.bind(styles);

const BackButton = (props) => {
	return (
		<button className={cx('back-btn', props.view)} onClick={props.back}>
			Späť 
		</button>
	);
};

export default BackButton;