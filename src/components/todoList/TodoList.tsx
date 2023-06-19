import { TodoListProps } from './todoList.types'
import TodoItem from '../todoItem/TodoItem'
import './TodoList.scss'

const TodoList = ({ items }: TodoListProps) => {
  return (
    <section className="todo-list">
      {items.length === 0 && (
        <h4>No todo items found.</h4>
      )}
      <ul className="todo-list__list">
        {items.length > 0 && items.map((todo) => (
          <TodoItem key={`todo-${todo.id}`} item={todo} />
        ))}
      </ul>
    </section>
  )
}

export default TodoList
