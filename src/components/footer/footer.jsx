import React from 'react';
import './footer.css'
import logo from '../../assets/img/logo.png'

const Footer = () => {
	return (
		<div className='footer'>
			<div className='footer-logo'>
				<img src={logo} alt='logo'/>
			</div>
			<div className="footer-links">
				<h4 className='footer-links_title'>
					Nadácia Good boy
				</h4>
				<ul className="links-list">
					<li className="links-item">
						<a href="/">O projekte</a>
					</li>
					<li className="links-item">
						<a href="/">Ako na to</a>
					</li>
					<li className="links-item">
						<a href="/">Kontakt</a>
					</li>
				</ul>
			</div>
			<div className="footer-foundation">
				<h4 className="foundation-title">
					Nadácia Good boy
				</h4>
				<p className="foundation-text">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in interdum ipsum, sit amet. 
				</p>
			</div>
			<div className="footer-foundation">
				<h4 className="foundation-title">
					Nadácia Good boy
				</h4>
				<p className="foundation-text">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in interdum ipsum, sit amet. 
				</p>
			</div>
		</div>
	);
};

export default Footer;