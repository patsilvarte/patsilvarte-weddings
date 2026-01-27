import type { FC } from "react";
import "./Button.scss";

interface ButtonsProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "navigation" | "form";
  onClick?: () => void;
}

export const Button: FC<ButtonsProps> = ({
  children,
  onClick,
  variant = "primary",
  ...rest
}) => {
  return (
    <button
      {...rest}
      onClick={onClick}
      className={`patsilvarte__button patsilvarte__button--${variant}`}
    >
      {children}
    </button>
  );
};
