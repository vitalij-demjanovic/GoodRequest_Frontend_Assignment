import React from 'react'
import './App.css'
import Footer from './components/footer/footer.jsx';
import Mask from './assets/img/MaskGroup.png'
import Dots from './components/Dots/Dots';
import { connect } from 'react-redux';
import FirstStep from './views/firsStep/firstStep';
import SecondStep from './views/secondStep/secondStep'
import ThirdStep from './views/thirdStep/thirdStep';

const App = (props) => {

const STEPS = [
    <FirstStep/>,
    <SecondStep/>,
    <ThirdStep/>
  ]
  return (
      <>
        <div className='container'>
          <Dots dot={`step${props.currStep + 1}`}/>
          <div className='about'>
            <div className='steps'>
              {STEPS[props.currStep]}
            </div>
            <div className='mask'>
              <img src={Mask} alt='mask'/>
            </div>
          </div>
        </div>
        <Footer />
      </>
  );
};

export default connect(
	(state) => ({
		currStep: state.form.currStep,
	}),
)(App);
