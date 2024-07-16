import style from './input.module.css';

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = (props: InputProps) => {
  const { onChange, ...restInputProps } = props;

  return (
    <input
      className={style.input}
      type="text"
      onChange={onChange}
      {...restInputProps}
    />
  );
};

export default Input;
