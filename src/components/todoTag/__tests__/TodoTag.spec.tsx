import { render, screen } from '@testing-library/react'
import TodoTag from '../TodoTag'

describe('TodoTag component', () => {
  it('should render TodoTag component as expected', () => {
    render(<TodoTag tag={'sports'}/>)
    expect(screen.getByText('sports')).toBeInTheDocument()
  })
})
