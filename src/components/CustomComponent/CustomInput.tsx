type Props = {
  type?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
};
const CustomInput = ({
  value,
  onChange,
  type = "text",
  placeholder = "",
  className = "",
}: Props) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={` bg-black/50 border border-blue-600 rounded-full font-['Poppin'] text-[1em]  px-[2em] py-[1em] outline-none ${className}`}
    />
  );
};

export default CustomInput;
