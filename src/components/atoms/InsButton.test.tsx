import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import InsButton from './InsButton'

test('should render a button with text', () => {
  render(<InsButton>Hello World</InsButton>)
  expect(screen.getByText('Hello World')).toBeInTheDocument()
})

test('should display a disabled button', () => {
  render(<InsButton disabled>Hello World</InsButton>)
  expect(screen.getByRole('button', { name: 'Hello World' })).toBeDisabled()
})

test('should be able to click on a button', async () => {
  const onClickMock = jest.fn()
  render(<InsButton onClick={onClickMock}>Hello World</InsButton>)
  const testButton = screen.getByRole('button', { name: 'Hello World' })
  expect(testButton).toBeEnabled()
  fireEvent.click(testButton)

  await waitFor(() => {
    expect(onClickMock).toHaveBeenCalledTimes(1)
  })
})
