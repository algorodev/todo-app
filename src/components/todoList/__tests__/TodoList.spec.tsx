import { render, screen } from '@testing-library/react'
import TodoList from '../TodoList'

describe('TodoList component', () => {
  it('should render TodoList component as expected', () => {
    render(<TodoList/>)
    expect(screen.getByText('TodoList works!')).toBeInTheDocument()
  })
})
