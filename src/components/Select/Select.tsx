import { useState } from 'react';
import DropdownInput from '../DropdownInput/DropdownInput';
import style from './select.module.css';
import { filterOptions } from './utils';
import { Checkbox } from '../Checkbox/Checkbox';

// TODO: Maybe add a debounce to the select (and for the input if implementing BE filtering)

const DEFAULT_PLACEHOLDER = 'Select an option';

export type Option = { id: string; label: string };

type MultiSelectProps = {
  multiple: true;
  selected?: string[];
  onSelect: (
    selectedItems: string[],
    e?: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => void;
};

type SingleSelectProps = {
  multiple?: false;
  selected?: string;
  onSelect: (
    selectedItems: string | null,
    e?: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => void;
};

type SelectBaseProps = {
  options: Option[];
  placeholder?: string;
} & (MultiSelectProps | SingleSelectProps);

const TestMultiSelect = (props: SelectBaseProps) => {
  const {
    options,
    onSelect,
    multiple,
    selected,
    placeholder = DEFAULT_PLACEHOLDER,
  } = props;

  const initSelectedItems = () => {
    if (!selected) return [];
    return Array.isArray(selected) ? selected : [selected];
  };

  const [open, setOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState(initSelectedItems);
  const [filteredOptions, setFilteredOptions] = useState<Option[]>(options);

  const handleSelect = (
    option: Option,
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (multiple) {
      const newSelectedValues = selectedItems?.includes(option.id)
        ? selectedItems.filter((optionId) => optionId !== option.id)
        : [...(selectedItems || []), option.id];
      setSelectedItems(newSelectedValues);
      onSelect(newSelectedValues, e);
      return;
    }
    if (!selectedItems?.includes(option.id)) {
      setSelectedItems([option.id]);
      onSelect(option.id, e);
      setOpen(false);
    } else {
      setSelectedItems([]);
      onSelect(null, e);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilteredOptions(filterOptions(e.target.value, options));
  };

  const findOptionLabel = (id: string) =>
    options.find((option) => option.id === id)?.label;

  const getPlaceholder = () => {
    if (multiple && selectedItems?.length) {
      return selectedItems.map((id) => findOptionLabel(id)).join(', ');
    } else if (!multiple && selectedItems?.length) {
      return findOptionLabel(selectedItems[0]);
    }
    return placeholder;
  };

  return (
    <div>
      <DropdownInput
        open={open}
        setOpen={setOpen}
        handleInputChange={handleInputChange}
        placeholder={getPlaceholder()}
      />
      {open && (
        <div className={style.options}>
          {filteredOptions.map((option) => {
            const checked = !!selectedItems?.includes(option.id);
            return (
              <div
                className={`${style.option} ${checked ? style.checked : ''}`}
                key={option.id}
                onClick={(e) => handleSelect(option, e)}
              >
                <Checkbox checked={checked} />
                {option.label}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default TestMultiSelect;
