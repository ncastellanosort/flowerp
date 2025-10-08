interface Props {
  className?: string,
  placeholder: string
}

function Input({ placeholder, className="" }: Props) {
  return (
     <input className={`bg-gray-100 m-4 h-10 p-2 rounded border border-gray-300 ${className}`} placeholder={ placeholder }></input>
  );
}
export default Input;
