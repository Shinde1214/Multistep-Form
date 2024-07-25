import React, { useState } from 'react'
import Stepper from './components/Stepper'
import StepperControl from './components/StepperControl'
import Account from './components/steps/Account'
import Details from './components/steps/Details'
import Final from './components/steps/Final'
import Payment from './components/steps/Payment'
import { StepperContext } from './components/context/StepperContext'

const App = () => {

  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState({
    username: "",
    password: "",
    address: "",
    city: "",
    country: "",
    creditCard: "",
    expiry: "",
  });
  const [finalData, setFinalData] = useState([]);
  const [errors, setErrors] = useState({});

  const steps = [
    "Acoount Info",
    "Personal Details",
    "Payment",
    "Complete"
  ]

  const DisplayStep = (steps) => {
    switch (steps) {

      case 1:
        return <Account errors={errors} />
      case 2:
        return <Details errors={errors} />
      case 3:
        return <Payment errors={errors} />
      case 4:
        return <Final />
      default:
    }
  }

  const validate = () => {
    const errors = {};
    if (currentStep == 1 && !userData.username) errors.username = 'username is required';
    if (currentStep == 1 && userData.username.length < 3) errors.username = 'username must be at least 3 characters';
    if (currentStep == 1 && !userData.password) errors.password = 'Password is required';
    if (currentStep == 1 && userData.password.length < 6) errors.password = 'Password must be at least 6 characters';
    if (currentStep == 2 && !userData.address) errors.address = 'address is required';
    if (currentStep == 2 && userData.address.length < 3) errors.address = 'address must be at least 3 characters';
    if (currentStep == 2 && !userData.city) errors.city = 'city is required';
    if (currentStep == 2 && userData.city.length < 3) errors.city = 'city must be at least 3 characters';
    if (currentStep == 2 && !userData.country) errors.country = 'country is required';
    if (currentStep == 2 && userData.country.length < 3) errors.country = 'country must be at least 3 characters';
    if (currentStep == 3 && !userData.creditCard) errors.creditCard = 'creditCard is required';
    if (currentStep == 3 && userData.creditCard.length < 10) errors.creditCard = 'creditCard must be at least 10 characters';
    if (currentStep == 3 && !userData.expiry) errors.expiry = 'expiry is required';
    if (currentStep == 3 && userData.expiry.length < Date()) errors.expiry = 'expiry must be in Date';

    setErrors(errors)
    return errors;
  };


  const handleClick = (direction) => {
    // let newStep = currentStep;

    // direction === "next" ? newStep++ : newStep--;

    // newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
    // console.log(userData);

    const errors = validate();
    if (Object.keys(errors).length === 0) {
      let newStep = currentStep;

      direction === "next" ? newStep++ : newStep--;

      newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
    } else {
      setErrors(errors);
    }
    console.log(userData);
    validate('');
  }

  return (
    <>
    <div className='md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white'>
      <div className='container horizontal mt-5'>
        <Stepper
          steps={steps}
          currentStep={currentStep}
          errors={errors}
        />

        <div className='my-10 p-10'>
          <StepperContext.Provider value={{
            userData,
            setUserData,
            finalData,
            setFinalData,
            errors,
            setErrors
          }}>
            {DisplayStep(currentStep)}
          </StepperContext.Provider>
        </div>
      </div>
      {currentStep !== steps.length &&
        <StepperControl
          handleClick={handleClick}
          currentStep={currentStep}
          steps={steps}
          errors={errors}
        />}
    </div>
    </>
  )
}

export default App