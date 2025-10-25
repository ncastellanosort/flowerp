import type { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

function Input(props: InputProps) {
  return (
     <input {...props} className={`
       bg-neutral-900 m-4 h-12 px-3 py-2
       rounded-md text-neutral-300
       placeholder-neutral-500
       focus:outline-none
       focus:ring-2
       focus:ring-neutral-500
       border border-neutral-800
       hover:border-neutral-600
       transition duration-150
       ${props.className}`}>
      </input>
  );
}
export default Input;
