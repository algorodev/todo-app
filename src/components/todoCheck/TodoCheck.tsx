import { TodoCheckProps } from './todoCheck.types'
import { useState } from 'react'
import './TodoCheck.scss'

const TodoCheck = ({ finished }: TodoCheckProps) => {
  const [isChecked, setIsChecked] = useState(finished)

  return <input type="checkbox"
                className={`todo-check ${isChecked ? 'todo-check--checked' : ''}`}
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}/>
}

export default TodoCheck
