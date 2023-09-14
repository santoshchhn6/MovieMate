import React from "react";

type Props = {
  onChange(event: React.ChangeEvent<HTMLSelectElement>): void;
  options: {
    value: string;
    title: string;
  }[];
  className?: string;
};

const CustomSelect = ({ onChange, options, className = "" }: Props) => {
  return (
    <select
      onChange={onChange}
      className={` p-2 px-4   bg-blue-600 text-xl outline-none rounded-lg font-['Poppin-sb'] ${className}`}
    >
      {options.map((opt, i) => (
        <option key={i} value={opt.value}>
          {opt.title}
        </option>
      ))}
    </select>
  );
};

export default CustomSelect;
