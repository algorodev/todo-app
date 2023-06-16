import Button from '../../components/button/Button'
import TodoList from '../../components/todoList/TodoList'
import './Home.scss'

const Home = () => {
  return (
    <section className='home'>
      <div className='home__actions'>
        <Button id='new-todo-button'
                label='New Todo'
                onButtonClick={() => console.log('click!')} />
      </div>
      <div className='home__list'>
        <TodoList />
      </div>
    </section>
  )
}

export default Home
