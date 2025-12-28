import * as React from "react";

type Props = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  asChild?: boolean;
};

export default function Button({
  children,
  variant = "primary",
  onClick,
  type = "button",
  className = "",
  asChild = false,
}: Props) {
  const base =
    "h-11 px-6 rounded-xl text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2";

  const styles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "border border-blue-600 text-blue-600 hover:bg-blue-50",
  };

  const Comp = asChild ? "span" : "button";

  return (
    <Comp
      onClick={onClick}
      className={`${base} ${styles[variant]} ${className}`}
      {...(!asChild && { type })}
    >
      {children}
    </Comp>
  );
}
