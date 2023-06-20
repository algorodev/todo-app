import { InputProps } from './inputControl.types'
import './InputControl.scss'

const InputControl = ({ error, field, label, ...input }: InputProps) => {
  return (
    <div className='input-control'>
      <label className='input-control__label' htmlFor={input.id}>{label}</label>
      <input {...field} {...input} className='input'/>
      {error && <small className='input-control__error'>{error}</small>}
    </div>
  )
}

export default InputControl
