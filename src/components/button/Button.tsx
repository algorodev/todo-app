import { ButtonProps } from './button.types'
import './Button.scss'

const Button = ({ id, label, onButtonClick }: ButtonProps) => (
  <button id={id} className="button" onClick={onButtonClick}>
    <label htmlFor={id} className="button__label">{label}</label>
  </button>
)

export default Button
