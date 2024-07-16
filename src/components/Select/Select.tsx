type MultiSelectProps = {
  multiple: true;
const TestMultiSelect = (props: SelectBaseProps) => {
  const {
    options,
  const [open, setOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState(initSelectedItems);
  const [filteredOptions, setFilteredOptions] = useState<Option[]>(options);
  const handleSelect = (
    option: Option,
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
  return (
    <div>
      <DropdownInput
        open={open}
        setOpen={setOpen}
        handleInputChange={handleInputChange}
        placeholder={
          !multiple && selectedItems?.length
            ? findOptionLabel(selectedItems[0])
            : placeholder
        }
      />
      {open && (
        <div className={style.options}>
};

export default TestMultiSelect;
