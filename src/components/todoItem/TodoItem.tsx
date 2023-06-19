import { TodoItemProps } from './todoItem.types'
import './TodoItem.scss'
import TodoCheck from '../todoCheck/TodoCheck'
import TodoTag from '../todoTag/TodoTag'

const TodoItem = ({ item }: TodoItemProps) => {
  return (
    <li className='todo-item'>
      <div className='todo-item__check'>
        <TodoCheck finished={item.finished} />
      </div>
      <div className='todo-item__info'>
        <h4 className='todo-item__title'>{item.title}</h4>
        <h4 className='todo-item__time'>{item.time}</h4>
      </div>
      <div className='todo-item__tag-container'>
        <TodoTag tag={item.tag} />
      </div>
    </li>
  )
}

export default TodoItem
