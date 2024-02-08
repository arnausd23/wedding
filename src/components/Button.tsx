import React from "react";

interface ButtonProps {
  text: string;
  link: string;
  className?: string;
  onClick?: () => void;
}

function Button({ text, link, className, onClick }: ButtonProps) {
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
      {text}
    </a>
  );
}

export default Button;
