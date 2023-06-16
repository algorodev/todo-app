import { render, screen } from '@testing-library/react'
import Home from '../Home'

describe('Home page', () => {
  it('should render Home page as expected', () => {
    render(<Home/>)
    expect(screen.getByText('Button works!')).toBeInTheDocument()
    expect(screen.getByText('TodoList works!')).toBeInTheDocument()
  })
})
