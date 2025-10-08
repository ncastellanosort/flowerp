interface Props {
  children: React.ReactNode,
  onClick?: () => void,
  className?: string,
  type?: "button" | "submit" | "reset"
}

function Button({ children, onClick,  className="", type="button" }: Props) {
  return (
     <button type={type} onClick={onClick} className={`py-3 px-8 w-full bg-blue-500 text-white rounded hover:bg-blue-900 ${className}`}>{ children }</button>
  );
}

export default Button;
