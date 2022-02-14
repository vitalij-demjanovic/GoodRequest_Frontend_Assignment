import React, { useState, useEffect } from 'react';
import Button from '../../components/Button/Button';
import BackButton from '../../components/Button/BackButton'
import { getSecondStep } from '../../store/actions'
import { getNextStep } from '../../store/actions';
import { getBackStep } from '../../store/actions';
import { connect } from 'react-redux';
import { store } from '../../store/store';
import './secondStep.css'

const mailFormat =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const numberFormat = /^\d{10}$/

const SecondStep = () => {
	const [valid, setvalid] = useState('btn-disable');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [tel, setTel] = useState('');


	const handleLastNameChange = event => { setLastName(event.target.value) };
	const handleEmailChange = event => { setEmail(event.target.value) };
	const handleTelNameChange = event => ( setTel(event.target.value) );

	useEffect(() => {
		if(tel.match(numberFormat) && email.match(mailFormat) && lastName.length >= 2){
		setvalid('')
	}
	}, [tel, email, lastName]);

	const StepControl = (e) => {
		e.preventDefault()
		if(valid === '') {
			e.preventDefault()
		const	{ name, lastName, email, number} = e.target
		const etap = {
			firstName: name.value,
			lastName: lastName.value,
			email: email.value,
			phone: number.value
		}
		store.dispatch(getSecondStep(etap))
		store.dispatch(getNextStep(2))
		}
	}

	const BackStep = () => {store.dispatch(getBackStep(0))}

	return (
		<div className='second-step'>
			<h1 className="second-step-title">
				Potrebujeme od Vás zopár informácií
			</h1>
			<div className="step-form">
				<h4 className="form__title">
					O vás 
				</h4>
				<form className='second-step-form' onSubmit={StepControl} id='form1'>
					<label className='step-fomr-label'>
						<span className="label__span">Meno</span><br />
						<input type="text" name='name' maxLength="20" placeholder='Zadajte Vaše meno'/>
					</label>
					<label className='step-fomr-label'>
						<span className="label__span">Priezvisko</span><br />
						<input 
						type="text" 
						name='lastName' 
						maxLength="30" 
						placeholder='Zadajte Vaše priezvisko'
						value={lastName}
						onChange={handleLastNameChange}
						/>
					</label>
					<label className='step-fomr-label'>
						<span className="label__span">E-mailová adresa</span><br />
						<input 
						type="text" 
						name='email' 
						placeholder='Zadajte Váš e-mail'
						value={email}
						onChange={handleEmailChange}
						/>
					</label>
					<label className='step-fomr-label'>
						<span className="label__span">Telefónne číslo</span><br />
						<input 
						type="text" 
						name='number' 
						placeholder='+421'
						value={tel}
						onChange={handleTelNameChange}
						/>
					</label>
				</form>
			</div>
			<div className="step-btns-space">
					<BackButton back={BackStep}/>
					<Button
					disable={valid} 
					type='submit' 
					form='form1' 
					name='Pokračovať'/>
			</div>
		</div>
	);
};

export default connect(
	null,
	{getSecondStep, getNextStep, getBackStep}
)(SecondStep);