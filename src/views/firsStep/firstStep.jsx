import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import classNames from 'classnames'
import wallet from '../../assets/icon/walletWhite.svg'
import paw from '../../assets/icon/pawWhite.svg'
import dropdown from '../../assets/icon/dropdown.svg'
import { store } from '../../store/store'
import { getNextStep } from '../../store/actions';
import { getFirstStep } from '../../store/actions';
import styles from './firstStep.css'
import { getSheltersRequest } from "../../store/actions";
import Button from '../../components/Button/Button';
const cx = classNames.bind(styles);

const FirstStep = (props) => {
	const [sumActive, setSum] = useState(0)
	const [mony, SetMony] = useState(5)
	const [shelt, SetShelt ] = useState('')
	const [shelterID, SetShelterID] = useState(0)
	const [gift, setGift] = useState('celej nadácii');
	const sumArg = [5, 10, 20, 30, 50, 100]

	useEffect(() => {
			props.getSheltersRequest()
	}, [props])

	const StepControl = () => {
		const etap = {shelter: shelt, value: mony, gift: gift, shelterID: shelterID}
		store.dispatch(getFirstStep(etap))
		store.dispatch(getNextStep(1))
	}

	const mass = props.list || []

	return (
		<div className='first-step'>
			<h1 className="first-step-title">
				Vyberte si možnosť, ako chcete pomôcť
			</h1>
			<div className="option-gift">
				<div
				className={cx('gift__first', gift === 'konkrétnemu útulku' ? 'active' : '')}
				onClick={() => {
					setGift('konkrétnemu útulku')
				}}
				>
					<div className="first__img">
						<img src={wallet} alt="walet" className='walet'/>
					</div>
					<p className="first-text">
						Chcem finančne prispieť konkrétnemu útulku
					</p>
				</div>
				<div
				className={cx('gift__second', gift === 'celej nadácii' ? 'active' : '')}
				onClick={() => {
					setGift('celej nadácii')
				}}
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
						<span className='list__span'><strong>Útulok</strong><br />{shelt === '' ? 'Vyberte útulok zo zoznamu' : shelt}</span>
						<img src={dropdown} alt="arrow" className='list__arrow'/>
					</div>
					<div className="shelters-option">
						<ul className="option-list">
							{mass.map((item) => (
								<li
									className="list__item"
									key={item.id}
									onClick={() => {
										SetShelt(item.name)
										SetShelterID(item.id)
										}}>
									{item.name}
								</li>
							))}
						</ul>
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
					onClick={(e) => {
						setSum(index);
						SetMony(sum)
					}}
					className={cx('sum-list_item', sumActive === index ? 'active' : '')}>
						{sum} €
					</li>
					))}
					<li
					onClick={() => (setSum('value'))}
					className={cx('sum-list_item', 'value-item', sumActive === 'value' ? 'active' : '' )}>
						<input type="text" name='value'/> €
						</li>
				</ul>
			</div>
			<div className="step-btns">
					<Button name='Pokračovať' next={StepControl}/>
			</div>
		</div>
	);
};

export default connect(
	(state) => ({
		list: state.shelters.list,
		first: state.form.first
	}),
	{getSheltersRequest, getNextStep}
)(FirstStep);
