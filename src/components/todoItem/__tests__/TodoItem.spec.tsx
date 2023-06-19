import { render, screen } from '@testing-library/react'
import TodoItem from '../TodoItem'

describe('TodoItem component', () => {
  it('should render TodoItem component as expected', () => {
    const item = {
      id: 1,
      title: 'Workout',
      time: '18:00',
      tag: 'sports',
      finished: false,
      createdAt: new Date()
    }
    render(<TodoItem item={item}/>)
    expect(screen.getByText('Workout')).toBeInTheDocument()
  })
})
