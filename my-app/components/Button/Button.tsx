import React, { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
};

function Button({ children, onClick }: ButtonProps) {
  return <button onClick={onClick} className="bg-pink text-white py-2 px-4 rounded mt-4">{children}</button>;
}

export { Button };