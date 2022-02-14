import React from 'react';
import classNames from 'classnames';
import styles from './button.css'
const cx = classNames.bind(styles);

const Button = (props) => {

	return (
		<button type={props.type} form={props.form} className={cx('btn', props.disable)} onClick={props.next}>
			{props.name}
		</button>
	);
};

export default Button;