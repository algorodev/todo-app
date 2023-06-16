import { render, screen } from '@testing-library/react'
import App from './App'

test('should render the app component as expected', () => {
  render(<App/>)

  expect(screen.getByText('ToDo app works!')).toBeInTheDocument()
})
