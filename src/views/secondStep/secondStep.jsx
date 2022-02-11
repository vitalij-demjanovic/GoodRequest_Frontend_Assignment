import React from 'react';
import './secondStep.css'

const SecondStep = () => {
	return (
		<div className='second-step'>
			<h1 className="second-step-title">
				Potrebujeme od Vás zopár informácií
			</h1>
			<div className="step-form">
				<h4 className="form__title">
					O vás
				</h4>
				<form className='second-step-form'>
					<label className='step-fomr-label'>
						<span className="label__span">Meno</span><br />
						<input type="text" placeholder='Zadajte Vaše meno'/>
					</label>
					<label className='step-fomr-label'>
						<span className="label__span">Priezvisko</span><br />
						<input type="text" placeholder='Zadajte Vaše priezvisko'/>
					</label>
					<label className='step-fomr-label'>
						<span className="label__span">E-mailová adresa</span><br />
						<input type="text" placeholder='Zadajte Váš e-mail'/>
					</label>
					<label className='step-fomr-label'>
						<span className="label__span">Telefónne číslo</span><br />
						<input type="text" placeholder='+421'/>
					</label>
				</form>
			</div>
		</div>
	);
};

export default SecondStep;