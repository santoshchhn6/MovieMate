import React from "react";

type Props = {
  onChange(event: React.ChangeEvent<HTMLSelectElement>): void;
  options: {
    value: string;
    title: string;
  }[];
};

const StyledSelect = ({ onChange, options }: Props) => {
  return (
    <select
      onChange={onChange}
      className=" p-2 w-[220px]  bg-blue-600 text-xl outline-none rounded-lg font-['Poppin-sb']"
    >
      {options.map((opt, i) => (
        <option key={i} value={opt.value}>
          {opt.title}
        </option>
      ))}
    </select>
  );
};

export default StyledSelect;
