import { render, screen } from '@testing-library/react'
import Button from './Button'

describe('Button component', () => {
  it('should render Button component as expected', () => {
    render(<Button/>)
    expect(screen.getByText('Button works!')).toBeInTheDocument()
  })
})
