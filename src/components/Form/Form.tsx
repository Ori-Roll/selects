import React from 'react';
import Select from '../Select/Select';
import style from './form.module.css';
import Input from '../Input/Input';

const mockData = [
  { id: '1', label: 'Option 1' },
  { id: '2', label: 'Option 2' },
  { id: '3', label: 'Option 3' },
  { id: '4', label: 'Option 4' },
  { id: '5', label: 'Option 5' },
];

type FormProps = {};

const Form = (props: FormProps) => {
  const handleSingleSelect = (selectedItem: string) => {
    console.log(selectedItem);
  };
  const handleMultiSelect = (selectedItems: string[]) => {
    console.log(selectedItems);
  };
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <div className={style['form-wrapper']}>
      <Select
        options={mockData}
        multiple
        selected={['1', '4']}
        onSelect={handleMultiSelect}
      />
      <Select options={mockData} onSelect={handleSingleSelect} />
      <Input placeholder="Please select a name" onChange={handleNameChange} />
      <Input
        placeholder="Please select an email"
        onChange={handleEmailChange}
      />
    </div>
  );
};

export default Form;
