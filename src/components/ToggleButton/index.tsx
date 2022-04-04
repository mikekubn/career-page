import React from 'react';

interface IToggleButton {
  value: boolean,
  callback: (val: boolean) => void,
}

const ToggleButton = ({ value, callback }: IToggleButton): React.ReactElement => (
  <label htmlFor="toggle-button" className="flex items-center cursor-pointer">
    <input
      onChange={() => callback(!value)}
      checked={value}
      type="checkbox"
      id="toggle-button"
      className="appearance-none sr-only peer"
    />
    <section
      className="flex w-12 h-6 p-1 text-black bg-transparent border rounded-full shrink-0 duration-500 ease-in-out peer-checked:bg-transparent after:w-[15px] after:h-[15px] after:bg-sky500/50 after:rounded-full after:shadow-md after:duration-500 peer-checked:after:translate-x-6"
    />
  </label>
);

export default ToggleButton;
