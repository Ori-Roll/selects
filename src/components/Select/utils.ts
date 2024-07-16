import { Option } from './Select';

// TODO: This might be better off handled by the BE ?
export const filterOptions = (input: string, options: Option[]) =>
  options?.filter(({ label }: Option) =>
    label.toLowerCase().includes(input.trim().toLowerCase())
  );
