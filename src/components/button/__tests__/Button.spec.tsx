import { fireEvent, render, screen } from '@testing-library/react'
import Button from '../Button'

describe('Button component', () => {
  it('should render Button component as expected', () => {
    const onClick = jest.fn()

    render(<Button id='test' label='Test' onButtonClick={onClick}/>)
    fireEvent.click(screen.getByRole('button'))

    expect(screen.getByRole('button')).toBeInTheDocument()
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
