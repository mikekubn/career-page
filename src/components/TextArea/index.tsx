import React from 'react';

interface IProps {
  label: string,
  name: string,
}

const TextArea = (props: IProps): React.ReactElement => {
  const { label, name } = props;

  return (
    <>
      <label htmlFor="message-contact" className="py-2">{label}</label>
      <textarea
        id="message-contact"
        required
        name={name}
        className="w-full h-32 pl-2 bg-transparent border rounded-lg resize-none border-sky500/70 hover:bg-sky500/10"
      />
    </>
  );
};

export default TextArea;
