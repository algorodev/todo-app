import { fireEvent, render, screen } from '@testing-library/react'
import TodoCheck from '../TodoCheck'

describe('TodoCheck component', () => {
  it('should render TodoCheck component as expected', () => {
    render(<TodoCheck finished={false}/>)
    fireEvent.click(screen.getByRole('checkbox'))
    expect(screen.getByRole('checkbox')).toBeInTheDocument()
  })
})
