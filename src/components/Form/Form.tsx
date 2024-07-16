import React from 'react';
import Select from '../Select/Select';

const mockData = [
  { id: '1', label: 'Option 1' },
  { id: '2', label: 'Option 2' },
  { id: '3', label: 'Option 3' },
  { id: '4', label: 'Option 4' },
  { id: '5', label: 'Option 5' },
];

type FormProps = {};

const Form = (props: FormProps) => {
  const handleSelect = (selectedItem: string[]) => {
    console.log(selectedItem);
  };

  return (
    <div>
      <Select
        options={mockData}
        multiple={true}
        selected={['1', '4']}
        onSelect={handleSelect}
      />
    </div>
  );
};

export default Form;
