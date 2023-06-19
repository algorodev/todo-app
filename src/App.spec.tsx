import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('should render application as expected', () => {
    render(<App/>)
    expect(screen.getByRole('button')).toBeInTheDocument()
    expect(screen.getByText('Workout')).toBeInTheDocument()
  })
})
