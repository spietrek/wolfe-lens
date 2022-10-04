import { render, screen } from '@testing-library/react'
import InsTypography from './InsTypography'

test('Show App Component', () => {
  render(<InsTypography>Hello World</InsTypography>)
  expect(screen.getByText('Hello World')).toBeInTheDocument()
})

test('that jest is working', () => {
  expect(true).toBe(true)
})
