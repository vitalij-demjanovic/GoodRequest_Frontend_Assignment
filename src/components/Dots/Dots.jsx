import React from 'react';
import classNames from 'classnames'
import styles from './dots.css'
const cx = classNames.bind(styles);

const Dots = (prop) => {

	return (
		<div className='dosts'>
			<span className={cx('dot', prop.dot === 'step1' ? 'active' : '')}></span>
			<span className={cx('dot', prop.dot === 'step2' ? 'active' : '')}></span>
			<span className={cx('dot', prop.dot === 'step3' ? 'active' : '')}></span>
		</div>
	);
};

export default Dots;