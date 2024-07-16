import React from 'react';
import Select from '../Select/Select';
import style from './form.module.css';
import Input from '../Input/Input';
import { extractDataFromForm } from './utils';

const mockDataSingle = [
  { id: '1', label: 'Option 1' },
  { id: '2', label: 'Option 2' },
  { id: '3', label: 'Option 3' },
];

const mockDataMulti = [
  { id: '1', label: 'Option 1' },
  { id: '2', label: 'Option 2' },
  { id: '3', label: 'Option 3' },
  { id: '4', label: 'Option 4' },
  { id: '5', label: 'Option 5' },
];

const Form = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = extractDataFromForm(e);

    console.log('data', data); // Log the form values to the console
  };

  return (
    <form className={style['form-wrapper']} onSubmit={handleSubmit}>
      <div className={style['form-options-wrapper']}>
        <Select
          options={mockDataMulti}
          multiple
          selected={['1', '4']}
          selectProps={{ name: 'select-multiple' }}
        />
        <Select
          options={mockDataSingle}
          selectProps={{ name: 'select-single' }}
        />
        <Input placeholder="Please select a name" name="name" />
        <Input name="email" placeholder="Please select an email" />
      </div>
      <button className={style['form-submit-btn']} type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
