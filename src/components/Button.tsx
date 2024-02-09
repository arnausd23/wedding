import React from "react";

interface ButtonProps {
  text: string;
  link: string;
  className?: string;
  onClick?: () => void;
  children: any;
}

function Button({ text, link, className, onClick, children }: ButtonProps) {
  return (
    <a
      target="_blank"
      href={link}
      className={
        "cursor-pointer inline-block bg-green text-white py-5 px-12 font-bold " +
        className
      }
      onClick={onClick}
    >
      {children}
      {text}
    </a>
  );
}

export default Button;
