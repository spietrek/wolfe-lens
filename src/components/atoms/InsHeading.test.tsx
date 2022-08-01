import { render, screen } from '@testing-library/react'
import InsHeading from './InsHeading'

test('Show App Component', () => {
  render(<InsHeading>Hello World</InsHeading>)
  expect(screen.getByText('Hello World')).toBeInTheDocument()
})

test('that jest is working', () => {
  expect(true).toBe(true)
})
