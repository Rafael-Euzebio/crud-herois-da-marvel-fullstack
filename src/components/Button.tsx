interface ButtonProps {
  color: 'red' | 'blue'
  text: string
  type: 'button' | 'submit' | 'reset'
  onClick?: () => void
}

const Button = ({ color, text, type, onClick }: ButtonProps) => {
  const colorVariants = {
    red: 'bg-marvel-accent-red hover:bg-marvel-accent-red-hover',
    blue: 'bg-marvel-accent-blue hover:bg-marvel-accent-blue-hover',
    purple: 'bg-marvel-accent-purple hover:bg-marvel-accent-purple-hover',
  }
  const buttonWrapperClasses = `${colorVariants[color]} w-40 m-auto mt-10 -slant-x-[20deg] transition-all duration-500 ease-in-out hover:w-52`
  const buttonClasses = 'w-full p-3 text-marvel-base font-bold'
  return (
    <div className={buttonWrapperClasses}>
      <button type={type} className={buttonClasses} onClick={onClick}>{text}</button>
    </div>
  )
}

export default Button
