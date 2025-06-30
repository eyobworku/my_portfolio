import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "primary" | "outline";
  children: React.ReactNode;
  className?: string;
  target?: string;
}

const Button: React.FC<ButtonProps> = ({
  href,
  variant = "primary",
  children,
  className = "",
  target = "",
  ...props
}) => {
  const baseStyles =
    "inline-block px-6 py-3 rounded font-semibold transition-all duration-300 ease-in-out text-sm sm:text-base";
  const primaryStyles =
    "bg-gold text-dark-blue-1 border-2 border-gold hover:bg-transparent hover:text-gold";
  const outlineStyles =
    "bg-transparent text-gold border-2 border-gold hover:bg-gold hover:text-dark-blue-1";

  const styles = `${baseStyles} ${
    variant === "primary" ? primaryStyles : outlineStyles
  } ${className}`;

  if (href) {
    return (
      <Link target={target} href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button className={styles} {...props}>
      {children}
    </button>
  );
};

export default Button;
