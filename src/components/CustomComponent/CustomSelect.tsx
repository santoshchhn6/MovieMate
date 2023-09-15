type Props = {
  onChange(event: React.ChangeEvent<HTMLSelectElement>): void;
  options:
    | {
        value: string;
        title: string;
      }[]
    | (string | number)[];
  className?: string;
};

const CustomSelect = ({ onChange, options, className = "" }: Props) => {
  return (
    <select
      onChange={onChange}
      className={` p-2 px-4   bg-blue-600 text-xl font-['Poppin-sb'] outline-none rounded-lg  ${className}`}
    >
      {options.map((opt, i) => (
        <option key={i} value={typeof opt === "object" ? opt.value : opt}>
          {typeof opt === "object" ? opt.title : opt}
        </option>
      ))}
    </select>
  );
};

export default CustomSelect;
