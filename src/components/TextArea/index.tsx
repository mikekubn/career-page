import React from 'react';

interface IProps {
  label: string;
  name: string;
  handleChange: (e: React.FormEvent<HTMLTextAreaElement>) => void;
  value: string;
}

const TextArea = (props: IProps): React.ReactElement => {
  const { label, name, handleChange, value } = props;

  return (
    <>
      <label htmlFor="message" className="py-2">
        {label}
      </label>
      <textarea
        id="message"
        required
        name={name}
        value={value}
        onChange={handleChange}
        className="w-full h-32 pl-2 bg-transparent border rounded-lg resize-none border-blue hover:bg-gray/20"
      />
    </>
  );
};

export default TextArea;
