import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import Button from '../../components/Button/Button';
import BackButton from '../../components/Button/BackButton'
import slovakia from '../../assets/img/slovakia.png'
import czech from '../../assets/img/czech-republic.png'
import { getBackStep, getNextStep, getSecondStep  } from '../../store/actions';
import { connect } from 'react-redux';
import { store } from '../../store/store';
import styles from'./secondStep.css'
const cx = classNames.bind(styles);

const mailFormat =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const numberFormat = /^\d{10}$/

const SecondStep = () => {
	const [valid, setvalid] = useState('btn-disable');
	const [AClass, setAClass] = useState(false)
	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [tel, setTel] = useState('');
	const [actFlag, setActFlag] = useState(slovakia)
	const [noFlag, setNoflag] = useState(czech)
	const [preset, setPreset] = useState('+421')

	const handlefirstNameChange = event => { setFirstName(event.target.value)};
	const handleLastNameChange = event => { setLastName(event.target.value)};
	const handleEmailChange = event => { setEmail(event.target.value) };
	const handleTelChange = event => ( setTel(event.target.value) );

	useEffect(() => {
		if(tel.match(numberFormat) && email.match(mailFormat) && lastName.length && firstName.length >= 2){
		setvalid('')
	}
	}, [tel, email, lastName, firstName]);

	const StepControl = (e) => {
		e.preventDefault()
		if(valid === '') {
			e.preventDefault()
		const	{ firstName, lastName, email, number} = e.target
		const etap = {
			firstName: firstName.value,
			lastName: lastName.value,
			email: email.value,
			phone: preset + number.value
		}
		store.dispatch(getSecondStep(etap))
		store.dispatch(getNextStep(2))
		}
	}

	 const change = () => {
		 setActFlag(noFlag)
		 setNoflag(actFlag)
		 setAClass(false)
		 actFlag !== slovakia 
		 ? setPreset('+421') 
		 : setPreset('+420')
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
					<label className='step-form-label'>
						Meno
								<input type="text"
						name='firstName'
						maxLength="20" 
						placeholder='Zadajte Vaše meno'
						value={firstName}
						onChange={handlefirstNameChange}
						/>
					</label>
					<label className='step-form-label'>
						Priezvisko
						<input 
						type="text" 
						name='lastName' 
						maxLength="30" 
						placeholder='Zadajte Vaše priezvisko'
						value={lastName}
						onChange={handleLastNameChange}
						/>
					</label>
					<label className='step-form-label'>
						E-mailová adresa
						<input 
						type="text" 
						name='email' 
						placeholder='Zadajte Váš e-mail'
						value={email}
						onChange={handleEmailChange}
						/>
					</label>
					<div className='step-form-label'>
						Telefónne číslo
						<label className='flex-label'>
							<img 
							className='label__img' 
							src={actFlag} alt="flag" 
							onClick={() => (
								setAClass(!AClass)
								)}/>
							<div className={cx(
								'label-flags',
								 AClass 
								 ? 'active' 
								 : '' 
								 )}>
								<img 
								className='flag__img' 
								src={noFlag} alt="flag" 
								onClick={change} />
							</div>
							{preset}
							<input 
						className='flag-input'
						type="text" 
						name='number' 
						value={tel}
						onChange={handleTelChange}
						/>
						</label>

					</div>
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