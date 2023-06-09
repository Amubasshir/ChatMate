import React, { useState } from 'react';
import Button from '../components/Button';
import FormControl from '../components/FormControl';
import SectionTitle from '../components/SectionTitle';

const Register = () => {
  const [formFields, setFormFields] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(formFields);

    // clear fields
    setFormFields({
      name: '',
      email: '',
      password: '',
    });
  };

  return (
    <div className="register flex flex-col justify-center items-center mt-20">
      <form
        onSubmit={handleRegister}
        className="
      flex flex-col gap-5
      "
      >
        <SectionTitle title={'Register here'} />

        <FormControl
          label="name"
          labelInner="Name"
          inputType="text"
          placeholder="Write your name"
          formFields={formFields}
          setFormFields={setFormFields}
        />
        <FormControl
          label="email"
          labelInner="Email Address"
          inputType="email"
          placeholder="Write your email"
          formFields={formFields}
          setFormFields={setFormFields}
        />
        <FormControl
          label="password"
          labelInner="Password"
          inputType="password"
          placeholder="Write your password"
          formFields={formFields}
          setFormFields={setFormFields}
        />

        <Button text="Register" submit />
      </form>
    </div>
  );
};

export default Register;
