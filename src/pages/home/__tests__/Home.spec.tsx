import { fireEvent, render, screen } from '@testing-library/react'
import Home from '../Home'

describe('Home page', () => {
  it('should render Home page as expected', () => {
    render(<Home/>)
    fireEvent.click(screen.getByRole('button'))

    expect(screen.getByRole('button')).toBeInTheDocument()
    expect(screen.getByText('TodoList works!')).toBeInTheDocument()
  })
})
