import { render, screen } from '@testing-library/react'
import TodoList from '../TodoList'

describe('TodoList component', () => {
  it('should render TodoList component as expected when received an array of items', () => {
    const items = [
      {
        id: 1,
        title: 'Workout',
        time: '18:00',
        tag: 'sports',
        finished: false,
        createdAt: new Date()
      }
    ]
    render(<TodoList items={items}/>)
    expect(screen.getByText('Workout')).toBeInTheDocument()
  })

  it('should render TodoList component as expected when received an empty array', () => {
    render(<TodoList items={[]}/>)
    expect(screen.getByText('No todo items found.')).toBeInTheDocument()
  })
})
