import { PropsWithChildren } from 'react'
import clsx from 'clsx'

interface IProps {
  renderText: () => JSX.Element
  children: React.ReactNode
  offset?: 'medium' | 'large'
}

const InsTextOverlay = ({
  renderText,
  children,
  offset = 'medium',
}: PropsWithChildren<IProps>): JSX.Element => {
  let offsetClass = ''
  if (offset === 'medium') {
    offsetClass = 'ml-6 mb-8'
  } else if (offset === 'large') {
    offsetClass = 'ml-12 mb-16'
  }
  return (
    <div className="relative">
      {children}
      <div className={clsx('absolute bottom-0', offsetClass)}>
        {renderText()}
      </div>
    </div>
  )
}

export default InsTextOverlay
