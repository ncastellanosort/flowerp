interface Props {
  children: React.ReactNode,
  onClick?: () => void,
  className?: string,
  type?: "button" | "submit" | "reset"
}

function Button({ children, onClick,  className="", type="button" }: Props) {
  return (
     <button type={type} onClick={onClick} 
     className={`
       py-3 px-8 w-full
       text-neutral-900
       font-bold
       rounded-md
       bg-neutral-200
       hover:bg-neutral-400
       animation
       duration-100
       cursor-pointer
       ${className}`}>{ children }</button>
  );
}

export default Button;
