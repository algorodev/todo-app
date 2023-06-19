import { TodoTagProps } from './todoTag.types'
import './TodoTag.scss'

const TodoTag = ({ tag }: TodoTagProps) => {
  return (
    <div className='todo-tag'>
      <p className='todo-tag__label'>{tag}</p>
    </div>
  )
}

export default TodoTag
