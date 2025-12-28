type Props = {
  placeholder: string;
};

export default function Input({ placeholder }: Props) {
  return (
    <input
      placeholder={placeholder}
      className="h-11 px-4 border rounded-xl focus:outline-none focus:border-primary"
    />
  );
}
