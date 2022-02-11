import React, { useState } from 'react';
import classNames from 'classnames'
import wallet from '../../assets/icon/walletWhite.svg'
import paw from '../../assets/icon/pawWhite.svg'
import dropdown from '../../assets/icon/dropdown.svg'
import styles from './firstStep.css'
const cx = classNames.bind(styles);

const FirstStep = () => {
	const [sumActive, setSum] = useState(0)
	const [gift, setGift] = useState('all');
	const sumArg = ['5 €', '10 €', '20 €', '30 €', '50 €', '100 €']
	return (
		<div className='first-step'>
			<h1 className="first-step-title">
				Vyberte si možnosť, ako chcete pomôcť 
			</h1>
			<div className="option-gift">
				<div 
				className={cx('gift__first', gift === 'one' ? 'active' : '')}
				onClick={() => (setGift('one'))}
				>
					<div className="first__img">
						<img src={wallet} alt="walet" className='walet'/>
					</div>
					<p className="first-text">
						Chcem finančne prispieť konkrétnemu útulku
					</p>
				</div>
				<div 
				className={cx('gift__second', gift === 'all' ? 'active' : '')}
				onClick={() => (setGift('all'))}
				>
					<div className="second__img">
						<img src={paw} alt="paw" className='paw' />
					</div>
					<p className="second-text">
						Chcem finančne prispieť celej nadácii
					</p>
				</div>
			</div>
			<div className="shelters">
				<div className="shelters-head">
					<span className='head__project'>O projekte</span>
					<span className='head__optional'>Nepovinné</span>
				</div>
				<div className="shelters-list">
					<div className="list__preset">
						<span className='list__span'><strong>Útulok</strong><br />Vyberte útulok zo zoznamu</span>
						<img src={dropdown} alt="arrow" className='list__arrow'/>
					</div>
				</div>
			</div>
			<div className="sum">
				<h4 className="sum-title">
					Suma, ktorou chcem prispieť
				</h4>
				<ul className="sum-list">
					{sumArg.map((sum, index) => (
					<li
					key={index}
					onClick={(e) => (setSum(index))}
					className={cx('sum-list_item', sumActive === index ? 'active' : '')}>
						{sum}
					</li>
					))}
					<li 
					onClick={() => (setSum('value'))}
					className={cx('sum-list_item', 'value-item', sumActive === 'value' ? 'active' : '' )}>
						<input type="text"/> €
						</li>
				</ul>
			</div>
		</div>
	);
};

export default FirstStep;