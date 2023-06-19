import Button from '../../components/button/Button'
import TodoList from '../../components/todoList/TodoList'
import { TodoI } from '../../types/todo.types'
import { HomeProps } from './home.types'
import './Home.scss'

const Home = ({ onButtonClick }: HomeProps) => {
  const TODO: TodoI[] = [
    {
      id: 1,
      title: 'Workout',
      time: '18:00',
      tag: 'sports',
      finished: false,
      createdAt: new Date()
    },
    {
      id: 2,
      title: 'Have a shower',
      time: '20:00',
      tag: 'health',
      finished: false,
      createdAt: new Date()
    }
  ]

  return (
    <section className="home">
      <div className="home__actions">
        <Button id="new-todo-button"
                label="New Todo"
                onButtonClick={onButtonClick}/>
      </div>
      <div className="home__list">
        <TodoList items={TODO}/>
      </div>
    </section>
  )
}

export default Home
