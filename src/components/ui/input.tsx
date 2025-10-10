import type { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

function Input(props: InputProps) {
  return (
     <input {...props} className={`bg-gray-100 m-4 h-10 p-2 rounded border border-gray-300 ${props.className}`}></input>
  );
}
export default Input;
