import React, { useState } from 'react';
import classNames from 'classnames'
import styles from './thirdStep.css'
import Done from '../../assets/icon/done.svg'
const cx = classNames.bind(styles);


const ThirdStep = () => {
	const [done, setdone] = useState(false);

	return (
		<div className='third-step'>
			<h1 className="third-step-title">
				Skontrolujte si zadané údaje
			</h1>
			<div className="summary">
				<div className="summary-block">
					<span className='block-span'>Akou formou chcem pomôcť</span>
					<p className="block-value">Server</p>
				</div>
				<div className="summary-block">
					<span className='block-span'>Najviac mi záleží na útulku</span>
					<p className="block-value">Server</p>
				</div>
				<div className="summary-block">
					<span className='block-span'>Suma ktorou chcem pomôcť</span>
					<p className="block-value">Server</p>
				</div>
				<div className="summary-block">
					<span className='block-span'>Meno a priezvisko</span>
					<p className="block-value">Server</p>
				</div>
				<div className="summary-block">
					<span className='block-span'>E-mailová adresa</span>
					<p className="block-value">Server</p>
				</div>
				<div className="summary-block">
					<span className='block-span'>Telefónne číslo</span>
					<p className="block-value">Server</p>
				</div>
			</div>
			<div className="summary-done">
				<div className='done__dot' onClick={() => {setdone(!done)}}>
					<img src={Done} alt="done" className={cx('dot__btn', {done})} />
				</div>
				<p className="done__text">
					Súhlasím so spracovaním mojich osobných údajov
				</p>
			</div>
		</div>
	);
};

export default ThirdStep;