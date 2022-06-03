import React from 'react';
import Button from './Button';
import Input from './Input';

const Form = () => {
  const array = ['Item 1', 'item2'];
  return (
    <div>
      <Input id="email" label="Email" required />
      <Input id="password" type="password" label="Senha" />
      <Button items={array}></Button>
    </div>
  );
};

export default Form;
