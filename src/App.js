import React, { useState } from 'react'
import './App.css'
import Footer from './components/footer/footer.jsx';
import Mask from './assets/img/MaskGroup.png'
import Dots from './components/Dots/Dots';
import BackButton from './components/Button/BackButton'
import Button from './components/Button/Button';
import FirstStep from './views/firsStep/firstStep';
import SecondStep from './views/secondStep/secondStep'
import ThirdStep from './views/thirdStep/thirdStep';

const App = () => {
  const [currStep, setCurrStep] = useState(0);

  const STEPS = [
    <FirstStep/>,
    <SecondStep/>,
    <ThirdStep/>
  ]

  const navigation = () => {
    setCurrStep(currStep + 1)
    if(currStep === STEPS.length -1) {
      setCurrStep(0)
    }
  }
  return (
      <>
        <div className='container'>
          <Dots dot={`step${currStep + 1}`}/>
          <div className='about'>
            <div className='steps'>
              {STEPS[currStep]}
              <div className={
                currStep > 0
                    ? 'step-btns-space'
                    : 'step-btns'}>
                <BackButton view={
                  currStep > 0
                      ? 'view'
                      : ''}
                            back={
                              () => (setCurrStep(currStep - 1))
                            }/>
                <Button name='Pokračovať' next={navigation}/>
              </div>
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

export default App;
