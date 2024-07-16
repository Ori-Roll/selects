import style from './checkbox.module.css';

type CheckboxProps = { checked?: boolean };

const CHECKED_ICON = '\u2714';

export const Checkbox = (props: CheckboxProps) => {
  const { checked } = props;

  return <div className={style.checkbox}>{checked ? CHECKED_ICON : ''}</div>;
};
