import type { FC } from "react";
import "./Button.scss";

interface ButtonsProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "navigation";
  onClick?: () => void;
}

export const Button: FC<ButtonsProps> = ({
  children,
  onClick,
  variant = "primary",
}) => {
  return (
    <button
      onClick={onClick}
      className={`patsilvarte__button patsilvarte__button--${variant}`}
    >
      {children}
    </button>
  );
};
