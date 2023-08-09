import React, { ReactNode } from "react"

interface IButton {
  children: ReactNode
  onClick: () => void
}

const Button: React.FC<IButton> = ({children, onClick}) => {
  return (
    <button onClick={onClick}>
        {children}
    </button>
  )
}

export default Button