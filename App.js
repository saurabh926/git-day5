            // src/App.js
import React from 'react';
import Form from './components/Form';
import  RegistrationForm from './components/RegistrationForm';

const App = () => {
  return (
    <div className="App">
      <h1>Contact Us</h1>
      <Form />
      <h1>Register</h1>
      <RegistrationForm />
    </div>
  );
};
  
export default  App;
