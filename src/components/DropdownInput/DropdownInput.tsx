import style from './dropdownInput.module.css';

type DropdownInputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  open: boolean;
  setOpen: (open: boolean) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

// TODO: These can come from some constants dir or a lib
// TODO: Split into normal and dropdown (use some base-input component)

const OPEN_ARROW = '\u25B2';
const CLOSE_ARROW = '\u25BC';

const DropdownInput = (props: DropdownInputProps) => {
  const { open, setOpen, handleInputChange, ...restInputProps } = props;

  return (
    <div className={style.wrapper}>
      <input
        className={style.input}
        type="text"
        onChange={handleInputChange}
        onFocus={() => setOpen(true)}
        {...restInputProps}
      />
      <button className={style.arrow} onClick={() => setOpen(!open)}>
        {open ? OPEN_ARROW : CLOSE_ARROW}
      </button>
    </div>
  );
};

export default DropdownInput;
