import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('should render application as expected', () => {
    render(<App/>)
    expect(screen.getByText('Button works!')).toBeInTheDocument()
    expect(screen.getByText('TodoList works!')).toBeInTheDocument()
  })
})
