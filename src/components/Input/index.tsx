import React from 'react';

interface IProps {
  label: string,
  type: string,
  name: string,
  placeholder: string,
}

const Input = (props: IProps): React.ReactElement => {
  const {
    label, name, type, placeholder,
  } = props;

  return (
    <>
      <label className="py-2">{label}</label>
      <input required type={type} name={name} className="w-full h-10 pl-2 bg-transparent border-b rounded-lg border-sky500/70 hover:bg-sky500/10" placeholder={placeholder} />
    </>
  );
};

export default Input;
