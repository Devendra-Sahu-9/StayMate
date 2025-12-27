type Props = {
  options: string[];
  placeholder: string;
};

export default function Select({ options, placeholder }: Props) {
  return (
    <select className="h-11 px-4 border border-borderColor rounded-xl bg-white focus:outline-none focus:border-primary">
      <option value="">{placeholder}</option>
      {options.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
}
