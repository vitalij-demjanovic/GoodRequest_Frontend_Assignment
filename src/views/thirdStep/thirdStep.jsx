import React, { useState } from 'react';
import { connect } from 'react-redux';
import { store } from '../../store/store';
import { getBackStep } from '../../store/actions';
import Button from '../../components/Button/Button';
import BackButton from '../../components/Button/BackButton';
import classNames from 'classnames'
import styles from './thirdStep.css'
import Done from '../../assets/icon/done.svg'
const cx = classNames.bind(styles);


const ThirdStep = (props) => {
	const [done, setdone] = useState(false);

	const BackStep = () => {store.dispatch(getBackStep(1))}

	const HendelSend = () => {
		const dataSend = {
			firstName: props.second.firstName,
			lastName: props.second.lastName,
			email: props.second.email,
			value: props.first.value,
			phone: props.second.phone,
			shelterID: props.first.shelterID
		}
		fetch(' https://frontend-assignment-api.goodrequest.dev/api/v1/shelters/contribute', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(dataSend),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});
	}

	return (
		<div className='third-step'>
			<h1 className="third-step-title">
				Skontrolujte si zadané údaje
			</h1>
			<div className="summary">
				<div className="summary-block">
					<span className='block-span'>Akou formou chcem pomôcť</span>
					<p className="block-value">Chcem finančne prispieť {props.first.gift}</p>
				</div>
				<div className="summary-block">
					<span className='block-span'>Najviac mi záleží na útulku</span>
					<p className="block-value">{props.first.shelter}</p>
				</div>
				<div className="summary-block">
					<span className='block-span'>Suma ktorou chcem pomôcť</span>
					<p className="block-value">{props.first.value} €</p>
				</div>
				<div className="summary-block">
					<span className='block-span'>Meno a priezvisko</span>
					<p className="block-value">{props.second.firsName} {props.second.lastName}</p>
				</div>
				<div className="summary-block">
					<span className='block-span'>E-mailová adresa</span>
					<p className="block-value">{ props.second.email}</p>
				</div>
				<div className="summary-block">
					<span className='block-span'>Telefónne číslo</span>
					<p className="block-value">{props.second.phone}</p>
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
			<div className="step-btns-space">
				<BackButton back={BackStep} />
				<Button disable={
					!done 
					? 
					'btn-disable' 
					: 
					''
					} 
					name='Odoslať formulár'
					next={HendelSend}
					/>
			</div>
		</div>
	);
};

export default connect(
	(state) => ({
		first: state.form.first,
		second: state.form.second
	}),
	{getBackStep}
)(ThirdStep);