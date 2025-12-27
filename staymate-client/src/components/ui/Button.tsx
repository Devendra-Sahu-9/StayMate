type Props = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({ children, variant = "primary" }: Props) {
  const base = "h-11 px-6 rounded-xl text-sm font-medium transition";

  const styles = {
    primary: "bg-blue-50 text-white hover:bg-blue-700",
    secondary: "border border-primary text-primary hover:bg-blue-50",
  };

  return <button className={`${base} ${styles[variant]}`}>{children}</button>;
}
