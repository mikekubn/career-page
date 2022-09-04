import React from 'react';

const Input: React.FC<React.HTMLProps<HTMLInputElement>> = (props: React.HTMLProps<HTMLInputElement>): React.ReactElement => {
  const { value, label, onChange } = props;

  const [val, setVal] = React.useState<string>(value?.toString() || '');

  const sanity = label?.toLowerCase().replace(' ', '-');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    setVal(e.currentTarget.value);
    onChange && onChange(e);
  };

  return (
    <>
      <label data-testid="label" htmlFor={`input-${sanity}`} className="py-2">
        {label}
      </label>
      <input
        className="w-full h-10 pl-2 bg-transparent border-b rounded-lg border-blue hover:bg-yellow"
        data-testid={`input-${sanity}`}
        id={`input-${sanity}`}
        value={val}
        onChange={handleChange}
        required
        {...props}
      />
    </>
  );
};

export default Input;
